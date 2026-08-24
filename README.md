# CyberGhost Clothing

Training project built with [Next.js](https://nextjs.org) (App Router), React 19 and TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the development server          |
| `npm run build` | Production build                      |
| `npm start`     | Serve the production build            |
| `npm run lint`  | Run ESLint                            |

## Structure

```
app/
  layout.tsx              Root layout: html/body shell, global CSS, Inter font, metadata
  page.tsx                /
  backend/
    page.tsx              /backend
    login/
      page.tsx            /backend/login
  api/
    products/route.ts     GET /api/products
    vendors/route.ts      GET /api/vendors
styles/                   globals.css + Home.module.css (CSS Modules)
public/                   Static assets and the products.json / vendors.json fixtures
```

Everything under `app/` is a Server Component unless it opts in with `'use client'`.
Add that directive to any file that needs state, effects or event handlers.

Routing is file-based: a folder becomes a URL segment, `page.tsx` makes that
segment a page, and `route.ts` makes it an API endpoint.

## Open tasks

The exercises are marked with comments in the files themselves:

- `app/backend/page.tsx` — build the products table
- `app/backend/login/page.tsx` — build the login screen
- `app/api/vendors/route.ts` — add a POST handler that checks credentials against `vendors.json`

## Notes

`next lint` was removed in Next.js 16, so linting runs through `eslint`
directly using the flat config in `eslint.config.mjs`.

ESLint is held at 9.x on purpose: `eslint-config-next` depends on
`eslint-plugin-react`, which does not support ESLint 10 yet.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Learn Next.js](https://nextjs.org/learn)
