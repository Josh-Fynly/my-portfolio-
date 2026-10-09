```markdown
# My Portfolio



![Status](https://img.shields.io/badge/status-active-brightgreen)

 

![License](https://img.shields.io/badge/license-MIT-blue)

 

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

 

![Next.js](https://img.shields.io/badge/Next.js-14-black)



Professional portfolio website showcasing full-stack projects spanning AI systems, backend infrastructure, physics simulations, and social platforms.

**Live:** https://my-portfolio-zfrw.vercel.app/

---

## The Vision

A developer's portfolio is more than a resume. It's proof of work. This portfolio demonstrates production-grade engineering across multiple domains: AI detection systems, backend automation, physics simulation, and full-stack product development.

Each project represents a real problem solved. Each includes the code that solved it.

---

## What This Is

This is a Next.js 14 application serving as both a portfolio website and a reference implementation for modern web development practices.

Think of it as a living resume that updates itself every time you push to main.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 |
| UI Library | React 18 |
| Language | TypeScript 5.x (strict mode) |
| Styling | Inline CSS with clamp units |
| Deployment | Vercel (auto-deploy on push) |
| Form Backend | FormSubmit (serverless) |
| Version Control | Git |
| Package Manager | npm 10+ |

---

## Quick Start

### Local Development

```bash
git clone https://github.com/Josh-Fynly/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

Push to main branch. Vercel handles the rest automatically.

---

## Environment Setup

Create `.env.local` (not committed):

```env
NEXT_PUBLIC_CONTACT_EMAIL=joshfynly@gmail.com
```

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   └── page.tsx            # Portfolio component (2000+ lines, all projects here)
├── public/                 # Static assets
├── package.json            # Dependencies
├── next.config.js          # Next.js config
├── tsconfig.json           # TypeScript strict mode
├── .gitignore              # Git exclusions
└── README.md               # This file
```

---

## Customization

### Add a Project

Edit `app/page.tsx`, add to `projects` array:

```javascript
{
  title: "Project Name",
  problem: "What problem it solves",
  solution: "How it solves it",
  tech: ["Tech1", "Tech2", "Tech3"],
  live: "https://live-url.com",      // optional
  github: "https://github.com/user/repo",
},
```

### Change Contact Email

Find `CONTACT_EMAIL` constant in `app/page.tsx`:

```javascript
const CONTACT_EMAIL = "your-email@domain.com";
```

### Customize Styles

Edit the `styles` object at end of `app/page.tsx` for colors, spacing, typography.

---

## Engineering Practices

**Code Quality:** Full TypeScript with strict mode. ESLint enforced. Prettier formatting.

**Performance:** Responsive design with clamp units. Next.js static generation. Inline CSS eliminates external stylesheets. Lighthouse 90+.

**Security:** CORS configured. CSP headers on deployment. Environment variables excluded from repository. CSRF protection on forms.

**Accessibility:** WCAG 2.1 Level AA compliant. Semantic HTML. Proper color contrast (4.5:1+). Keyboard navigation support. Visible focus indicators.

**Testing:** Unit tests for components. Integration tests for forms. Lighthouse CI for performance regressions.

**Monitoring:** Vercel Analytics for Core Web Vitals. Error tracking. Email delivery confirmation.

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Targets

- Lighthouse Score: 90+
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Time to Interactive: < 3 seconds on 4G
- Build Time: < 30 seconds

---

## Development Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes locally: `npm run dev`
3. Test: `npm run build`
4. Commit: `git commit -m "feat: description"`
5. Push: `git push origin feature/your-feature`
6. Merge to main via pull request
7. Vercel auto-deploys production

---

## What's Inside

This portfolio contains six production projects:

- CODE-OR-SCAM (AI detection system)
- Universal Unit Convertly (backend API)
- Autonomous Lunar Construction Simulator (physics simulation)
- Cloud Data Pipeline (CI/CD automation)
- Banner of Excellence (client website)
- Zwey (full-stack social platform)

See live site for details on each.

---

## Contact

- Email: joshfynly@gmail.com
- GitHub: https://github.com/Josh-Fynly
- LinkedIn: https://linkedin.com/in/joshua-ekpenyong-014014340

---

## License

MIT License. Copyright 2026 Josh Fynly.

---

## Changelog

- September 2026: Added Zwey, Banner of Excellence, Cloud Data Pipeline
- Earlier: CODE-OR-SCAM, Unit Convertly, Lunar Simulator
```
