# Deploying Haveli Restaurant Mumbai Site to Vercel

## Deploy to Vercel
1. Fork or clone the repository and push it to GitHub.  
2. In Vercel, click **“New Project”** and import the GitHub repository.  
3. Vercel will detect a static‑HTML project automatically – no build step is required.  
4. Click **“Deploy”**. Vercel will serve the HTML files and apply the rewrites defined in `vercel.json`.

## Environment Variables
The site does not require any environment variables. No `.env` configuration is needed.

## First‑time Setup
- The site is purely static; there is no backend or database to configure.  
- After deployment, verify that the clean URLs (e.g., `/menu`) correctly serve the corresponding `.html` pages.  

That's it – your restaurant website is live!