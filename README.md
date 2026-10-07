# Syzygy store + admin

Two pages, no build step.

| File | What it is |
| --- | --- |
| `index.html` | The storefront. Reads everything from Firestore. |
| `admin.html` | The admin panel. Facebook, Google or email sign-in. |
| `firebase-config.js` | Paste your Firebase web config here. |
| `seed.js` | Sample catalogue. Used until you connect Firebase, and by the admin "Import sample catalogue" button. |
| `firestore.rules`, `storage.rules`, `firebase.json` | Security rules and hosting config. |

Until `firebase-config.js` is filled in, the store runs on the sample data in demo mode (no orders saved, no real photos).

## Setup (about 15 minutes)

### 1. Create the Firebase project
1. Go to console.firebase.google.com and create a project.
2. Add a **Web app** (the `</>` icon). Copy the config object into `firebase-config.js`.

### 2. Turn on the services
- **Firestore Database**: create it in production mode.
- **Authentication → Sign-in method**: enable **Facebook**, **Google** and **Email/Password** (use any you want).
- **Storage** (optional, for photo uploads): new projects need the Blaze plan. Without it, set `imageMode = 'inline'` in `firebase-config.js` and the admin stores resized photos inside each product. Pasting image URLs always works.

### 3. Facebook login
1. At developers.facebook.com create an app and add the **Facebook Login** product.
2. Copy the **App ID** and **App secret** into Firebase → Authentication → Facebook.
3. Copy the **OAuth redirect URI** Firebase shows into Facebook Login → Settings → Valid OAuth Redirect URIs.
4. Switch the Facebook app to **Live** so people other than you can sign in.

### 4. Deploy the rules
```
npm i -g firebase-tools
firebase login
firebase use --add        # pick your project
firebase deploy --only firestore:rules,storage
```
(Or paste `firestore.rules` and `storage.rules` into the console Rules tabs.)

### 5. Host it
Serve the folder over https. The easiest route:
```
firebase deploy --only hosting
```
To test locally use `npx serve .` (browsers block ES modules from `file://`).
Add your own domain under Authentication → Settings → Authorized domains.

### 6. Make yourself the first admin
1. Open `/admin.html` and sign in with Facebook, Google or email.
2. The page says "No access" and shows your **User ID**. Copy it.
3. In the Firebase console open Firestore, create a collection `admins`, add a document whose **ID is that User ID**, with one field `email` (string).
4. Reload `/admin.html`. You are in. Add more admins from the Admins page.

### 7. Load the sample catalogue
Dashboard → **Import sample catalogue**. This creates categories, styles, 34 products and the default settings. Then replace the photos and prices with your own.

## Photos with UploadThing (recommended)
UploadThing's secret key must never sit in a web page, so a tiny server function holds it. `api/upload.js` is that function (Vercel).
1. Create an app at uploadthing.com and copy the **token** from API Keys.
2. Push this folder to a Vercel project (or `npx vercel`). Add env vars: `UPLOADTHING_TOKEN`, `FIREBASE_API_KEY`, `FIREBASE_PROJECT_ID`, optionally `ALLOWED_ORIGIN`.
3. Put the function URL in `firebase-config.js` → `uploadEndpoint` (e.g. `https://your-app.vercel.app/api/upload`).
4. In admin, every Upload button now sends a resized JPEG there. Only signed-in admins are accepted; the returned UploadThing URL is saved in Firestore. Max 4 MB per photo (Vercel's body limit; the admin resizes to 1600px first).
Leave `uploadEndpoint` empty to use Firebase Storage or inline mode instead.

## What the admin controls
- **Products**: name, category, price, sale price, stock, badge, finish, material, styles, description, size options, limited drop flag, visibility, and photos (upload, paste URL, reorder).
- **Categories and styles**: names, descriptions, tile images, order.
- **Orders**: every checkout lands here. Change status, view details, export CSV.
- **Reviews**: add, edit, publish or hide. Only published reviews show.
- **Subscribers**: newsletter emails, export CSV.
- **Settings**: announcement bar, hero text, delivery fees, free delivery threshold, promo code, limited drop and countdown, about text, contact links, feature images, and all policy pages.
- **Admins**: who can sign in.

## Things to know
- **Photos**: product photos are 4:5 portrait on a clean background. The store crops with `object-fit: cover`. The first photo is the main one and the second shows on hover. Products without photos show generated placeholder artwork.
- **Stock** is not reduced automatically when an order comes in. Update it from Products, or add a Cloud Function later.
- **Payments**: checkout collects the order and the payment method (cash on delivery, bKash, Nagad). It does not charge anything. You confirm and collect payment yourself.
- **Policies and sample text** in the seed (delivery fees, 7-day exchange, promo code, countdown date) are placeholders. Edit them in Settings before you launch.
- **Reviews** in the seed are samples. They disappear as soon as you save settings and have real reviews published.
- The Firebase config values are public by design. The rules are what protect your data. Do not loosen them.
