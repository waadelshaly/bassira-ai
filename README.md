# BASSIRA AI | بصيرة
Research demonstration of personalized longitudinal retinal intelligence. Not a medical device; not a substitute for an ophthalmologist. All patients and outputs are fictional or simulated. Uploaded images never leave the browser. No login, no API key.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/

## Deploy to Vercel (public HTTPS, free)
1. Create a free account at vercel.com and a GitHub repository; upload this project's files to it.
2. In Vercel choose Add New > Project, import the repository, keep the detected Vite settings, click Deploy.
3. In Project Settings > Deployment Protection, turn Vercel Authentication OFF so visitors need no login.
4. Copy the production URL (for example https://your-name.vercel.app) and open it on a phone to confirm the Dashboard appears.
Alternative without GitHub: run `npx vercel --prod` in this folder and sign in when asked.

## Update and redeploy
Edit `public/app.js` (pages and logic) or `public/style.css` (styling), then push to GitHub; Vercel redeploys automatically (or run `npx vercel --prod`).

## Create the poster QR code (only after you have the final URL)
    npm run qr -- https://your-final-url.vercel.app
Files appear in `qr/`: `bassira-qr.png` (3000 px), `bassira-qr.svg`, and `bassira-qr-with-caption.svg` (includes SCAN TO EXPERIENCE BASSIRA AI). The script refuses localhost and claude.ai links.

## Adding the QR code to the poster
1. Use the SVG (best for print) or the PNG in your poster software (PowerPoint, Canva, Illustrator).
2. Print at least 3 cm wide (4-5 cm on A1/A0 posters), dark on white, keeping the white border clear.
3. If you used the plain QR, type SCAN TO EXPERIENCE BASSIRA AI beneath it.
4. Scan the printed proof with two phones before sending to print.
