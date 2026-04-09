# my-portfolio-
My professional portfolio 



# My Portfolio

A professional, responsive portfolio website built with Next.js, React, and TypeScript.

## Features

- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Project Showcase** - Easy to add/remove projects without coding
- ✅ **Contact Form** - Integrated email contact functionality
- ✅ **Dark Theme** - Modern, professional dark interface
- ✅ **Zero Dependencies** - Styled with inline CSS, no external styling libraries
- ✅ **SEO Optimized** - Metadata and proper HTML structure
- ✅ **Fast Deploy** - Optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript / JavaScript
- **Styling:** Inline CSS (Responsive with clamp units)
- **Deployment:** Vercel

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   └── page.tsx          # Portfolio component
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Customization

### Adding a New Project

Edit `app/page.tsx` and add to the `projects` array:

```javascript
{
  title: "Project Name",
  problem: "The problem it solves",
  solution: "How it solves it",
  tech: ["Tech1", "Tech2", "Tech3"],
  live: "https://...",      // optional
  github: "https://...",
},
```

### Editing Skills

Find the `Technical Expertise` section in `app/page.tsx` and update the skill cards.

### Changing Contact Email

Update the `CONTACT_EMAIL` constant at the top of `app/page.tsx`.

## Deployment on Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your `my-portfolio` repository
4. Click Deploy
5. Your site is live at `my-portfolio.vercel.app`

Every push to GitHub automatically redeploys your site.

## License

© 2026 Josh Fynly. All rights reserved.
