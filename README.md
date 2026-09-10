# GameCore Labs

A production-ready bilingual (English and Vietnamese) static studio website for GameCore Labs. It presents Unity development services, clearly labeled demo concepts, engagement models, studio information, FAQs and a project brief form without inventing clients, metrics, testimonials or team members.

## Tech stack

- Astro and TypeScript
- Tailwind CSS v4 through the Vite integration
- Static site generation with minimal browser JavaScript
- GitHub Pages deployment workflow

## Local setup

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The default configuration uses `/gamecore-labs/` as its base path, so the local URL is normally `http://localhost:4321/gamecore-labs/`.

English is served from `/gamecore-labs/`; Vietnamese is served from `/gamecore-labs/vi/`. The navigation and footer include a language switch, and each page publishes matching `hreflang` metadata.

## Validation and production build

```bash
npm run check
npm run build
npm run preview
```

The static output is written to `dist/`.

## GitHub Pages deployment

1. Push the `main` branch to a GitHub repository.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site and deploys `dist/`.
4. For a repository named `gamecore-labs`, the default URL is `https://USERNAME.github.io/gamecore-labs/`.

The workflow derives the base path from the repository name. Optional repository Actions variables:

- `SITE_URL`: origin such as `https://example.com`
- `BASE_PATH`: `/gamecore-labs` for a project site, or an empty value for a root custom domain
- `PUBLIC_CONTACT_FORM_ENDPOINT`: optional form POST endpoint

## Custom domain

Configure the domain in GitHub Pages, set `SITE_URL` to the custom origin, and set `BASE_PATH` to the path where the site will be served. For a root domain use an empty `BASE_PATH`, then rebuild and deploy. Add `public/CNAME` only after the real domain is known.

## Replacing project data

Edit `src/data/projects.ts` for English and `src/data/projects-vi.ts` for Vietnamese. Each record uses `slug`, `title`, `shortDescription`, `description`, `coverImage`, `gallery`, `platform`, `genre`, `technology`, `services`, `year`, `featured` and `status`. Current entries are explicitly labeled demo concepts. Replace copy and images together when verified work is available. Detail pages are generated from each `slug`.

## Replacing images

Artwork lives in `public/images/`. Keep the descriptive filenames for direct replacement, or update the matching path in `src/data/projects.ts`. Prefer WebP or AVIF and preserve a landscape crop. The bundled hero, studio and project images are original generated placeholders, not client screenshots.

## Contact form

Copy `.env.example` to `.env` and set:

```text
PUBLIC_CONTACT_FORM_ENDPOINT=https://your-form-service.example/submit
```

When configured, the browser sends JSON with a `POST` request. When absent, the form displays a development message and directs visitors to the contact email. No fake backend is included.

## Products and admin

The public product catalog is available at `/products/` and `/vi/products/`. The protected management interface is at `/admin/` and supports product pricing, images, categories, reference games, comments, inquiries, and view/click totals.

Firebase provides authentication, Firestore persistence, image storage, counters and Gmail notifications while GitHub Pages continues to host the public site. Follow `FIREBASE_SETUP.md` to connect a Firebase project and Gmail app password. Never put the normal Gmail password in this repository.

Demo game pages include clearly labeled reference price ranges. Final prices should be confirmed against the agreed scope and supplied assets.

## Branding, email and social links

Edit `src/config/site.ts` to update the name, description, canonical URL, contact email and social URLs. Empty social URLs are intentionally hidden.

## Legal review

The Privacy and Terms pages are generic templates. Review them with qualified counsel before production use, especially after enabling a form provider or third-party service.
