# Deployment Guide

Deploy SearchFolio to your favorite hosting platform.

---

## Prerequisites

Before deploying, make sure you have:
1. Customized your portfolio in `src/config/portfolio.ts`
2. Built the project successfully with `npm run build`

---

## Cloudflare Pages

### Option 1: Direct Upload

1. Run the build:
   ```bash
   npm run build
   ```

2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com)

3. Create new project → Direct Upload

4. Upload the `out/` folder

5. Your site is live!

### Option 2: Git Integration

1. Push your code to GitHub

2. Go to Cloudflare Pages → Create project

3. Connect your GitHub repo

4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: `20`

5. Deploy!

---

## Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: Git Integration

1. Push to GitHub

2. Go to [vercel.com/new](https://vercel.com/new)

3. Import your repository

4. Click Deploy

Done! Vercel handles everything automatically.

---

## Netlify

### Option 1: Drag & Drop

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `out/` folder

### Option 2: Git Integration

1. Push to GitHub

2. Go to Netlify → New site from Git

3. Configure:
   - Build command: `npm run build`
   - Publish directory: `out`

---

## GitHub Pages

1. Add to `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: "export",
     basePath: "/your-repo-name",
   };
   ```

2. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. Push to GitHub

4. Enable GitHub Pages in repo Settings → Pages → Source: gh-pages

---

## Custom Domain

### Cloudflare Pages
1. Go to your project settings
2. Custom domains → Add
3. Follow DNS instructions

### Vercel
1. Go to project settings
2. Domains → Add
3. Update DNS with provided records

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS

---

## Environment Variables

If you add API integrations (like AI), set environment variables:

### Cloudflare Pages
Settings → Environment variables → Add

### Vercel
Settings → Environment Variables → Add

### Netlify
Site settings → Environment → Add

---

## Troubleshooting

### Build Fails

1. Make sure you're using Node 18+
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install` again

### Images Not Loading

Make sure images are in the `public/` folder and referenced with `/image.png` (not `./public/image.png`)

### 404 on Refresh

This is normal for static exports with client-side routing. The hosting platform should handle it:
- Cloudflare: Configure SPA redirect in _redirects file
- Vercel: Automatic
- Netlify: Add `_redirects` file with `/*  /index.html  200`

---

Need help? [Open an issue](https://github.com/yourusername/searchfolio/issues)
