# Christ Infotech Website

The official marketing website for **Christ Infotech**, the technology and innovation centre of CHRIST (Deemed to be University), Lavasa, Pune. The site presents the centre's services, in-house products, project portfolio, team, career openings, and a contact channel for new business and collaboration enquiries.

## Features

- **Home** — hero banner, collaborations marquee, services overview, "why choose us" section, a 3-step process explainer, client testimonials, latest blog/event highlights, an FAQ accordion, and project/newsletter call-to-action blocks.
- **About** — company overview ("Who We Are"), core values, a step-by-step "How We Deliver Solutions" walkthrough, and the core team grid with photos and roles.
- **Portfolio** — showcase of delivered projects (e.g. DIABINDIA, EZBus, EthosTrack, QNO, Let Us Dream, Locally Away) with descriptions and screenshots.
- **Products** — in-house products built by the centre (e.g. MentEezy).
- **Career** — reasons to join, vision & mission carousel, and current open positions with a link into the contact form.
- **Contact** — company contact details, office locations, and an enquiry form.
- Fully responsive layout (mobile, tablet, desktop) built with Bootstrap's grid and utility classes plus custom CSS.

## Technologies Used

- **[React 19](https://react.dev/)** — UI library (function components + hooks, no external router; navigation is done via `window.location.pathname`).
- **[Vite](https://vitejs.dev/)** — dev server and production build tool (`@vitejs/plugin-react` for the React Fast Refresh/JSX transform).
- **[Bootstrap 5](https://getbootstrap.com/)** — grid system, utility classes, and bundled JS (navbar collapse, accordion) imported globally in `main.jsx`.
- **Plain CSS** (`src/index.css`) — custom design system (hero sections, cards, carousels, animations) layered on top of Bootstrap.
- **JavaScript (ES modules, JSX)** — no TypeScript is used in this project.

## Project Structure

```
Christ Infotech/
├── index.html                  # Single HTML entry point (Vite mounts React into #root)
├── vite.config.js              # Vite configuration (React plugin)
├── package.json                # Scripts and dependencies
├── src/
│   ├── main.jsx                # App bootstrap: imports Bootstrap CSS/JS + index.css, renders <App />
│   ├── App.jsx                 # Minimal path-based router (matches window.location.pathname to a page)
│   ├── index.css               # All custom styling for every page/section
│   ├── pages/                  # One top-level component per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Products.jsx
│   │   ├── Career.jsx
│   │   └── Contact.jsx
│   ├── components/             # Section/UI components, grouped by page where page-specific
│   │   ├── SiteNavbar.jsx, SiteFooter.jsx, SectionHeading.jsx, InfiniteMarquee.jsx
│   │   ├── home/HomeSections.jsx
│   │   ├── about/AboutSections.jsx
│   │   ├── portfolio/PortfolioSections.jsx
│   │   ├── products/ProductSections.jsx
│   │   ├── career/CareerHero.jsx, CareerSections.jsx
│   │   └── contact/ContactSection.jsx
│   ├── data/                   # Static content/data consumed by the section components
│   │   ├── homeData.js, aboutData.js, portfolioData.js, productData.js
│   └── assets/images/          # Logo and all page/section imagery (organized by page: Index, about, career, portfolio)
└── dist/                       # Production build output (generated, git-ignored)
```

## Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0` (required by Vite 8 — check with `node -v`)
- **npm** `9+` (bundled with modern Node.js — check with `npm -v`)

## Installation / Setup

1. Clone or download the repository and open the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

Start the local development server (hot module reload enabled):

```bash
npm run dev
```

By default Vite serves the site at `http://localhost:5173` (or the next free port).

## Building for Production

Create an optimized production build in `dist/`:

```bash
npm run build
```

Preview the production build locally before deploying:

```bash
npm run preview
```

### Deployment note

Routing is handled entirely on the client by reading `window.location.pathname` (see `src/App.jsx`) — there is no server-side routing and no router library. When deploying `dist/` to a static host (Netlify, Vercel, S3/CloudFront, Nginx, etc.), configure a **SPA fallback** so that direct/deep links such as `/about`, `/portfolio`, `/products`, `/career`, and `/contact` are rewritten to `index.html` instead of returning a 404.

## Environment / Configuration

- No environment variables are required or read by the application (no `import.meta.env` / `process.env` usage in the codebase).
- All content (services, team members, portfolio projects, products, blog entries, etc.) is stored as plain JavaScript data in `src/data/*.js` — update those files to change site copy without touching the section components.
- The contact form (`src/components/contact/ContactSection.jsx`) currently only prevents the default browser submit; it is not wired to a backend or email service. Connect it to your form-handling endpoint of choice before relying on it in production.

## Other Notes

- Images are organized under `src/assets/images/christinfotech imgs/` by page/section (`Index/`, `about/`, `career/`, `portfolio/`) and imported directly into the relevant `data/*.js` or component files.
- No test suite or linter is currently configured in this project.
