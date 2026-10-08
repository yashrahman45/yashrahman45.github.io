// Vercel serverless function: receives one resized image from the admin panel,
// checks the caller is a Syzygy admin, then stores it on UploadThing.
// The UploadThing token is set in the constant below (server side only). An env var of the same name wins if set.
// Never copy this token into index.html, admin.html or firebase-config.js: those files are public.
// Env vars (Vercel → Settings → Environment Variables), all optional except where you leave a placeholder:
//   FIREBASE_API_KEY    your Firebase web apiKey
//   FIREBASE_PROJECT_ID your Firebase project id
//   ALLOWED_ORIGIN      optional, e.g. https://syzygy.bd (defaults to *)
import { UTApi } from 'uploadthing/server';

const UPLOADTHING_TOKEN='eyJhcGlLZXkiOiJza19saXZlXzlkMGE0ZjliODhiMmNjODBhMmE5ZDNiNGNhMDdhZjhmZWM3MjdlZmQ2ZGNjYjBlN2U4ZTIwYzkxMjY3ZDMzMmYiLCJhcHBJZCI6InBzazFneXBndHoiLCJyZWdpb25zIjpbInNlYTEiXX0=';

export const config = { api: { bodyParser: false } };

const readBody = (req, max) => new Promise((res, rej) => {
  const chunks = []; let n = 0;
  req.on('data', c => { n += c.length; if (n > max) { rej(new Error('too large')); req.destroy(); } else chunks.push(c); });
  req.on('end', () => res(Buffer.concat(chunks)));
  req.on('error', rej);
});

async function isAdmin(idToken) {
  const { FIREBASE_API_KEY: key, FIREBASE_PROJECT_ID: pid } = process.env;
  const l = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${key}`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ idToken })
  });
  if (!l.ok) return false;
  const uid = (await l.json()).users?.[0]?.localId;
  if (!uid) return false;
  // Firestore rules let a signed-in user read their own admins/{uid} doc.
  const d = await fetch(`https://firestore.googleapis.com/v1/projects/${pid}/databases/(default)/documents/admins/${uid}`,
    { headers: { authorization: `Bearer ${idToken}` } });
  return d.ok;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type, x-file-name');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  try {
    const tok = (req.headers.authorization || '').replace(/^Bearer /, '');
    if (!tok || !(await isAdmin(tok))) return res.status(403).json({ error: 'Not an admin' });
    const type = req.headers['content-type'] || '';
    if (!/^image\/(jpeg|png|webp)$/.test(type)) return res.status(400).json({ error: 'JPEG, PNG or WebP only' });
    const buf = await readBody(req, 4 * 1024 * 1024);
    const name = String(req.headers['x-file-name'] || 'photo.jpg').replace(/[^\w.\-]/g, '_').slice(0, 80);
    const ut = new UTApi({ token: process.env.UPLOADTHING_TOKEN || UPLOADTHING_TOKEN });
    const out = await ut.uploadFiles(new File([buf], name, { type }));
    if (out.error || !out.data) return res.status(502).json({ error: out.error?.message || 'UploadThing failed' });
    return res.status(200).json({ url: out.data.ufsUrl || out.data.url, key: out.data.key });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
