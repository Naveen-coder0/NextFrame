# NextFrame Web 🚀

**NextFrame Web** is a modern web design agency focused on building fast, professional, and conversion-focused websites for local businesses such as cafés, clinics, hotels, and service providers.

Our goal is simple: **websites that actually bring customers.**

---

# NextFrame — Vite + React + TypeScript Starter

A polished marketing/agency website built with Vite, React, TypeScript, Tailwind CSS and Radix UI primitives. This project is a production-ready frontend scaffold featuring animated routes, reusable UI components, and common pages for small businesses (Home, Work, Services, Contact, etc.).

**Quick overview**

- Framework: React + TypeScript
- Bundler / dev server: Vite
- Styling: Tailwind CSS + tailwind-animate
- UI primitives: Radix UI + lucide-react icons
- Data & hooks: @tanstack/react-query, react-hook-form (used in parts)
- Utilities: framer-motion for animation, sonner/toasts

**Features**

- Animated page transitions using `framer-motion` and `AnimatePresence`.
- Router: `react-router-dom` with a simple animated routes wrapper.
- Pre-built pages: Home (`/`), Work (`/work`), Contact (`/contact`), About, Services, Process and NotFound.
- Responsive, mobile-first layout and components.
- Sample projects list and contact form with simulated submission + toast.

Files of interest

- [src/App.tsx](src/App.tsx) — App root, providers, router, and animated routes.
- [src/main.tsx](src/main.tsx) — Entry point that mounts the app.
- [src/pages/Index.tsx](src/pages/Index.tsx) — Home / hero and services overview.
- [src/pages/Work.tsx](src/pages/Work.tsx) — Projects showcase grid.
- [src/pages/Contact.tsx](src/pages/Contact.tsx) — Contact options and form.
- tailwind configuration: [tailwind.config.ts](tailwind.config.ts)
- vite configuration: [vite.config.ts](vite.config.ts)
- package metadata: [package.json](package.json)

Getting started

1. Install dependencies (npm/yarn/pnpm):

```bash
npm install
# or
# yarn
# pnpm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview a production build locally:

```bash
npm run preview
```

Available scripts (from `package.json`)

- `dev` — runs `vite` development server
- `build` — builds for production
- `build:dev` — builds with development mode
- `preview` — preview the production build
- `lint` — runs `eslint` across the project

Routing / Pages

- `/` — Home (Hero, Services, Why Choose Us, CTA)
- `/work` — Projects / portfolio grid
- `/services` — Services listing (component present)
- `/about` — About page
- `/process` — Process page
- `/contact` — Contact page and contact form

Customization notes

- Replace sample project items in `src/pages/Work.tsx` to update portfolio entries.
- Modify hero and content in `src/pages/Index.tsx`.
- Components live under `src/components` (UI primitives, layout, shared pieces like `HeroShapes`, `SectionHeading`).
- Tailwind tokens and theme customizations are in `tailwind.config.ts`.

Environment & deployment

- This is a static frontend app. You can deploy the built output to any static host (Vercel, Netlify, Surge, GitHub Pages, etc.).
- Ensure the host serves `index.html` for client-side routing (fallback to `index.html`).

Contact (found in the project)

- WhatsApp: https://wa.me/9467269782
- Phone: +91 9988324455
- Email: naveen.maan2006@gmail.com

Notes & next steps

- If you'd like, I can:
	- Add a `README` section with deployment examples for Vercel/Netlify.
	- Wire a real contact backend (Netlify Functions / API endpoint).
	- Add CI linting and format checks.

---

Created from the project files in this folder. If you want wording changed, more sections (Contributing, Changelog, License), or extra setup steps (pnpm, bun, etc.), tell me which one to add and I will update the README.
