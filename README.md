```markdown
# My Portfolio

A professional, production-grade portfolio website built with Next.js 14, React 18, and TypeScript. Showcasing full-stack projects in backend systems, AI tools, simulations, and product development with advanced engineering practices.

## Live Portfolio

https://my-portfolio-zfrw.vercel.app/

## Architecture Overview

### Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.x with strict mode
- **Runtime:** Node.js 18+
- **Styling:** Inline CSS with responsive clamp units
- **Deployment:** Vercel (Edge Functions capable)
- **Form Backend:** FormSubmit (serverless)
- **Version Control:** Git with conventional commits
- **Package Manager:** npm 10+

### Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, SEO
│   └── page.tsx            # Portfolio component (2000+ lines)
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript strict mode
├── .gitignore              # Git exclusions
├── .env.local              # Local environment variables (not committed)
└── README.md               # This documentation

```

## Projects Portfolio

### 1. CODE-OR-SCAM — AI Code Detector

Privacy-first tool detecting hallucinated APIs, missing error handling, and unrealistic code across 9 programming languages without server transmission.

- **Tech Stack:** Vanilla JavaScript, HTML5, Pattern Matching
- **Live Demo:** https://josh-fynly.github.io/CODE-OR-SCAM
- **Repository:** https://github.com/Josh-Fynly/CODE-OR-SCAM

### 2. Universal Unit Convertly

Backend-first conversion engine with separation of concerns, stateless operations, and API-ready architecture for microservices scaling.

- **Tech Stack:** Python, Streamlit, Modular Architecture
- **Live Demo:** https://unit-convertly.streamlit.app
- **Repository:** https://github.com/Josh-Fynly/unit-converter

### 3. Autonomous Lunar Construction Simulator

Specialized simulation platform modeling lunar physics, terrain dynamics, and energy-constrained multi-agent robotics for autonomous construction strategy optimization.

- **Tech Stack:** Python, Physics Modeling, Multi-Agent Systems
- **Repository:** https://github.com/Josh-Fynly/-autonomous-lunar-construction-simulator

### 4. Cloud Data Pipeline

Modular backend automation pipeline with CI/CD integration, structured data processing, analytics generation, and secure cloud execution orchestration.

- **Tech Stack:** Python, Pandas, NumPy, GitHub Actions, SMTP
- **Repository:** https://github.com/Josh-Fynly/cloud-data-pipeline

### 5. Banner Of Excellence Schools Website

Production-ready school website demonstrating client-focused development, responsive design, and Apple-inspired minimalist UX principles.

- **Tech Stack:** Next.js 14, TypeScript, React 18, Tailwind CSS, Vercel
- **Live Demo:** https://school-website-sandy-xi.vercel.app
- **Repository:** https://github.com/Josh-Fynly/school-website

### 6. Zwey — Artist Discovery & Collaboration Platform

Full-stack social platform demonstrating Firebase architecture, authentication patterns, real-time data synchronization, and security rule implementation.

- **Tech Stack:** Next.js 14, React 18, JavaScript, Tailwind CSS, Firebase Auth, Cloud Firestore, Firebase Storage, Vercel
- **Live Beta:** https://zwey-app.vercel.app
- **Repository:** https://github.com/Josh-Fynly/zwey

## Engineering Practices

### Code Quality

- Linting with ESLint and TypeScript parser
- Code formatting via Prettier
- TypeScript strict mode throughout
- Cyclomatic complexity management
- Regular dead code audits

### Performance Optimization

- Next.js static generation and ISR
- Webpack bundle analysis on each build
- React hooks optimization with memo usage
- Inline CSS eliminates external stylesheet overhead
- Proper image sizing and lazy loading

### Security Implementation

- CORS configuration with trusted origin whitelist
- Content Security Policy headers on Vercel
- Environment variables never committed to repository
- FormSubmit CSRF protection and spam filtering
- Dependabot checks for vulnerability updates
- No sensitive data in localStorage

### Testing Strategy

- Unit tests for component logic
- Integration tests for form submission and API flows
- End-to-end testing for critical user paths
- Lighthouse CI for performance regression detection

### Deployment Pipeline

Automatic deployment on every push to main branch via Vercel webhook integration with pre-deployment verification including build validation, TypeScript compilation, bundle analysis, and environment variable validation.

## Development Setup

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later
- Git for version control

### Local Development

```bash
# Clone repository
git clone https://github.com/Josh-Fynly/my-portfolio.git
cd my-portfolio

# Install dependencies
npm ci

# Run development server
npm run dev

# Open browser to
http://localhost:3000

# Type checking
npx tsc --noEmit

# Linting
npx eslint app/

# Format checking
npx prettier --check app/
```

### Environment Configuration

Create `.env.local` in project root (not committed to version control):

```env
NEXT_PUBLIC_CONTACT_EMAIL=joshfynly@gmail.com
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Test production build locally
npm start
```

## Customization

### Adding Projects

Edit `app/page.tsx` and add to the `projects` array:

```javascript
{
  title: "Project Name",
  problem: "The problem it solves",
  solution: "How it solves it",
  tech: ["Tech1", "Tech2", "Tech3"],
  live: "https://live-demo.com",        // optional
  github: "https://github.com/user/repo",
},
```

### Updating Skills

Locate the `Technical Expertise` section in `app/page.tsx` and modify skill cards.

### Contact Email

Update the `CONTACT_EMAIL` constant at the top of `app/page.tsx`.

### Styles

Modify the `styles` object at the end of `app/page.tsx` for color, spacing, and typography adjustments.

## Deployment on Vercel

1. Connect GitHub repository to Vercel
2. Vercel auto-detects Next.js configuration
3. Add environment variables in Vercel dashboard
4. Deploy button triggered automatically on push
5. Production URL assigned automatically

Every push to main branch triggers automatic redeployment.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (latest versions)

## Performance Targets

- Lighthouse Score: 90+
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Time to Interactive: < 3 seconds on 4G
- Build Time: < 30 seconds on Vercel

## Accessibility Compliance

- WCAG 2.1 Level AA standard
- 4.5:1 minimum color contrast for text
- Full keyboard navigation support
- Semantic HTML with ARIA labels
- Visible focus indicators

## SEO Implementation

- Dynamic open graph tags
- Schema.org structured data
- Responsive mobile design
- Auto-generated sitemap
- Configured robots.txt
- Canonical URLs

## Version Control Strategy

- Main branch: production-ready code only
- Feature branches: conventional naming (feature/*, fix/*, docs/*)
- Conventional commit messages
- Pull requests required before merge

## Monitoring

- Vercel Analytics for Core Web Vitals
- Error tracking via Vercel deployment logs
- Email delivery confirmation via FormSubmit
- Dependabot security update reviews

## Contact

Email: joshfynly@gmail.com
GitHub: https://github.com/Josh-Fynly
LinkedIn: https://linkedin.com/in/joshua-ekpenyong-014014340

## License

Copyright 2026 Josh Fynly. All rights reserved.

## Changelog

- September 2026: Added Zwey project (full-stack social platform)
- September 2026: Added Banner of Excellence website (client project)
- September 2026: Added Cloud Data Pipeline (backend automation)
- Prior: CODE-OR-SCAM, Unit Convertly, Lunar Simulator
