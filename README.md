# MD MOSARRAF HOSSAIN - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, and achievements in Software Quality Assurance and Testing.

## Features

- **Modern Design**: Clean, professional design built with Next.js 16 and Tailwind CSS
- **Responsive Layout**: Fully responsive design that works on all devices
- **Professional Sections**:
  - Hero section with contact information
  - About/Objective section
  - Detailed experience timeline
  - Comprehensive skills showcase
  - Certifications (with LinkedIn integration placeholder)
  - Contact form
  - Legal pages (Privacy Policy, Terms of Service)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mhossainusa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mhossainusa/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── certifications/    # Certifications page
│   ├── contact/          # Contact page
│   ├── experience/       # Experience page
│   ├── privacy/          # Privacy Policy page
│   ├── skills/           # Skills page
│   ├── terms/            # Terms of Service page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/           # React components
│   ├── ContactForm.tsx
│   ├── ExperienceTimeline.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── SkillsGrid.tsx
├── lib/                  # Utilities and data
│   ├── data/            # Data files
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── personal.ts
│   │   └── skills.ts
│   └── utils/           # Utility functions
│       └── linkedin.ts # LinkedIn integration utilities
└── public/              # Static assets
```

## LinkedIn Integration

The website includes a placeholder for LinkedIn data fetching. To implement:

1. Create an API route at `app/api/linkedin/route.ts`
2. Use a LinkedIn scraper service (e.g., RapidAPI) or LinkedIn Official API
3. Update `lib/utils/linkedin.ts` with your implementation
4. Update `lib/data/certifications.ts` to fetch from the API

**Note**: LinkedIn's official API requires OAuth authentication. For portfolio sites, consider:
- Using a backend proxy service
- Manual updates
- Third-party LinkedIn scraping services

## Deployment

### GitHub Pages with Custom Domain (Configured)

This project is configured for GitHub Pages deployment with custom domain support.

**Quick Setup:**

1. **Enable GitHub Pages:**
   - Go to repository **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save settings

2. **Add Custom Domain (Optional):**
   - Create `public/CNAME` file with your domain:
     ```
     www.yourdomain.com
     ```
   - Or configure in GitHub Settings > Pages > Custom domain
   - Configure DNS records (see `GITHUB_PAGES_SETUP.md` for details)

3. **Deploy:**
   ```bash
   git push origin main
   ```
   The GitHub Action will automatically build and deploy.

**For detailed instructions, see:** `GITHUB_PAGES_SETUP.md`

### Vercel (Alternative)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

Edit `lib/data/personal.ts` to update:
- Name, title, contact information
- LinkedIn profile URL
- Location and work status

### Update Experience

Edit `lib/data/experience.ts` to add or modify work experience entries.

### Update Skills

Edit `lib/data/skills.ts` to modify skill categories and items.

### Styling

The site uses Tailwind CSS. Customize colors and styles in:
- `app/globals.css` for global styles
- Component files for component-specific styles
- Tailwind config (if needed)

## License

This project is private and proprietary.

## Contact

MD MOSARRAF HOSSAIN
- Email: mdmosarrafhossain1@gmail.com
- Phone: (646) 250-2783
- LinkedIn: [https://www.linkedin.com/in/md-hossain-4b04bab3/](https://www.linkedin.com/in/md-hossain-4b04bab3/)
