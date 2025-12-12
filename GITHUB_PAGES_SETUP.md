# GitHub Pages Deployment with Custom Domain

This guide will help you deploy your Next.js portfolio to GitHub Pages with a custom domain.

## Prerequisites

1. A GitHub account
2. A custom domain (optional but recommended)
3. Node.js installed locally for testing

## Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### Step 2: Configure Custom Domain (Optional)

#### Option A: Using CNAME file

1. Create a file named `CNAME` in the `public` folder (or root of `out` folder after build)
2. Add your domain name (one per line):
   ```
   www.yourdomain.com
   ```
   Or for apex domain:
   ```
   yourdomain.com
   ```

3. Commit and push the CNAME file:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

#### Option B: Configure in GitHub Settings

1. Go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS** (recommended)

### Step 3: Configure DNS

#### For www subdomain (CNAME):
- **Type**: CNAME
- **Name**: www
- **Value**: `yourusername.github.io`
- **TTL**: 3600 (or default)

#### For apex domain (A records):
Add these A records:
- **Type**: A
- **Name**: @ (or blank)
- **Value**: 
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **TTL**: 3600 (or default)

**Note**: You can use both www and apex domain by adding CNAME for www and A records for apex.

### Step 4: Deploy

The GitHub Action will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 5: Verify Deployment

1. Wait for the GitHub Action to complete (check the **Actions** tab)
2. Visit your GitHub Pages URL: `https://yourusername.github.io/repository-name`
3. If using custom domain, visit: `https://www.yourdomain.com`

## Troubleshooting

### Images not loading
- Ensure all images are in the `public` folder
- Check that image paths use absolute paths starting with `/`

### 404 errors on page refresh
- This is normal for static sites. GitHub Pages serves static files.
- Consider using a service like Netlify or Vercel for better routing support.

### Custom domain not working
1. Check DNS propagation: Use `dig yourdomain.com` or online DNS checker
2. Verify CNAME file is in the correct location
3. Check GitHub Pages settings for domain configuration
4. Wait up to 24 hours for DNS changes to propagate

### Build fails
- Check GitHub Actions logs for errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## File Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── .nojekyll              # Prevents Jekyll processing
│   └── CNAME                   # Custom domain (create this)
├── out/                        # Generated static files (created on build)
└── next.config.ts              # Next.js config with static export
```

## Important Notes

1. **Static Export**: This setup uses Next.js static export, which means:
   - No server-side rendering
   - No API routes (they won't work)
   - All pages are pre-rendered at build time

2. **Image Optimization**: Images are set to `unoptimized: true` for static export compatibility.

3. **Base Path**: If deploying to a subdirectory (e.g., `/portfolio`), update `next.config.ts`:
   ```typescript
   basePath: '/portfolio',
   ```

4. **Environment Variables**: For static export, environment variables must be prefixed with `NEXT_PUBLIC_` to be available in the browser.

## Manual Deployment

If you want to test locally before pushing:

```bash
# Build the static site
npm run build

# The output will be in the 'out' folder
# You can serve it locally with:
npx serve out
```

## Support

For issues with:
- **GitHub Pages**: Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- **Next.js**: Check [Next.js static export docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- **Custom Domains**: Check [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

