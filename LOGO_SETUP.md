# Logo and Favicon Setup

## Files Created

1. **Brand Logo**: `public/mosarraf.png` - Used in Navbar and Hero section
2. **Favicon**: `app/favicon.ico` - Browser tab icon (Next.js App Router automatically serves this)
3. **Icon files**: `app/icon.png` and `app/icon.ico` - Alternative icon formats

## Where Logo Appears

1. **Navigation Bar** (top left) - Circular logo next to name
2. **Hero Section** (home page right side) - Large circular logo
3. **Browser Tab** (favicon) - Small icon in browser tab

## Troubleshooting

If the logo or favicon is not showing:

### 1. Hard Refresh Browser Cache
- **Chrome/Edge**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Firefox**: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Safari**: `Cmd+Option+R`

### 2. Clear Browser Cache
- Go to browser settings
- Clear browsing data/cache
- Restart browser

### 3. Check Dev Server
- Make sure dev server is running: `npm run dev`
- Restart dev server if needed: Stop (Ctrl+C) and run `npm run dev` again

### 4. Verify Files Exist
```bash
# Check if files exist
ls -lh app/favicon.ico
ls -lh public/mosarraf.png
ls -lh app/icon.png
```

### 5. Check Browser Console
- Open browser DevTools (F12)
- Check Console for any image loading errors
- Check Network tab to see if images are loading (status 200)

### 6. Incognito/Private Mode
- Try opening the site in incognito/private mode to bypass cache

## File Locations

- Logo source: `app/image/logo/mosarraf.png`
- Logo in use: `public/mosarraf.png`
- Favicon: `app/favicon.ico` (Next.js App Router automatically serves this)
- Alternative icons: `app/icon.png`, `app/icon.ico`

## Next.js App Router Favicon

Next.js 13+ App Router automatically detects and serves:
- `app/favicon.ico`
- `app/icon.png`
- `app/icon.ico`

These are automatically added to the HTML `<head>` section.

## Image Component

The logo uses Next.js `Image` component which:
- Optimizes images automatically
- Provides lazy loading
- Handles responsive images

If images still don't load, check:
1. File permissions
2. File paths in components (`/mosarraf.png` is correct for public folder)
3. Browser console for errors

