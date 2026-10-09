
```markdown
# My Portfolio

Professional portfolio website built with Next.js 14, React 18, and TypeScript.

**Live:** https://my-portfolio-zfrw.vercel.app/

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Inline CSS (responsive clamp units)
- Vercel deployment

## Quick Start

```bash
git clone https://github.com/Josh-Fynly/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Open http://localhost:3000

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel: Push to main branch. Automatic deployment.

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_CONTACT_EMAIL=joshfynly@gmail.com
```

## Customization

**Add a project:** Edit `app/page.tsx`, add to `projects` array:

```javascript
{
  title: "Project Name",
  problem: "Problem statement",
  solution: "Solution approach",
  tech: ["Tech1", "Tech2"],
  live: "https://live-url.com",
  github: "https://github.com/user/repo",
},
```

**Change contact email:** Update `CONTACT_EMAIL` constant in `app/page.tsx`.

**Modify styles:** Edit `styles` object at end of `app/page.tsx`.

## Code Quality

- TypeScript strict mode
- WCAG 2.1 Level AA accessible
- Lighthouse 90+
- Security: CORS, CSP headers, no secrets in repo

## Contact

joshfynly@gmail.com | https://github.com/Josh-Fynly

## License

Copyright 2026 Josh Fynly. All rights reserved.
