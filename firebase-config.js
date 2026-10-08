// Paste your Firebase web app config here.
// Firebase console → Project settings → General → Your apps → Web app → SDK setup and configuration.
// These values are safe to publish. Access is controlled by firestore.rules and storage.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyBBz0LwtgFHOCfnsDLjCJz3aKXWd-QWmTo",
  authDomain: "syzygy-33269.firebaseapp.com",
  projectId: "syzygy-33269",
  storageBucket: "syzygy-33269.firebasestorage.app",
  messagingSenderId: "887537361774",
  appId: "1:887537361774:web:07cb32babfd8cb5d75977f",
  measurementId: "G-4VBNM7GP6P"
};

// Where the admin panel saves uploaded product photos.
//   'storage' → Firebase Storage (best for speed; needs the Blaze plan on new projects)
//   'uploadthing' → uploads straight from the admin page to UploadThing (no server needed; the token is
//                   saved privately in Firestore the first time you upload, see README)
//   'inline'  → resized photos are stored inside the product document (free, but heavier pages)
// If a Storage upload fails, the admin panel falls back to 'inline' automatically.
export const imageMode = 'uploadthing';

// UploadThing (recommended). Deploy api/upload.js (see README) and paste its URL here,
// e.g. 'https://syzygy.vercel.app/api/upload' or just '/api/upload' if the site is on the same Vercel project.
// Leave empty to use the imageMode above instead.
export const uploadEndpoint = '';