# Deploy to Vercel

1. **Import the repository**  
   - In Vercel, click **New Project** → **Import Git Repository**.  
   - Select the GitHub repo containing this project (`app_9bc6`).  

2. **Configure the project**  
   - Vercel auto‑detects the **static‑HTML** framework; no build command is required.  
   - Ensure the existing `vercel.json` (included in the repo) is present – it provides clean‑URL rewrites from `/page` to `/page.html`.  

3. **Environment variables**  
   - This site does not use any environment variables. No entries are needed in Vercel’s **Environment Variables** settings.  

4. **Deploy**  
   - Click **Deploy**. Vercel will serve the `.html` files directly and apply the rewrites defined in `vercel.json`.  

# Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| *(none)* | No environment variables are used by this static site. | No |

# First‑time setup

- No database or backend configuration is required.  
- Verify that all HTML pages (`index.html`, `menu.html`, `reservation.html`, etc.) are present at the repository root.  
- The `public/` folder already contains `robots.txt` and `sitemap.xml`; they will be served automatically.  

After deployment, visit your Vercel URL (e.g., `https://your-project.vercel.app`) and test the clean URLs such as `/menu`, `/reservation`, etc. Enjoy your new restaurant website!