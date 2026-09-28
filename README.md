# Aditya Shaw — Portfolio

Modern, responsive personal portfolio for **Aditya Shaw** (AI Backend Engineer).

Built with React + Vite + Tailwind CSS v4 + Framer Motion + Lucide icons.

## Features

- Dark mode primary (with light mode toggle)
- Fully responsive (mobile-first)
- Smooth scroll navigation
- Project detail modals
- SEO meta tags
- Accessible focus states & reduced-motion support
- Clean data-driven architecture (`src/data/`)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     # Navbar, Footer
  sections/       # Hero, About, Skills, Projects, Education, Achievements, Contact
  data/           # projects.js, skills.js, education.js, socials.js
  hooks/          # useTheme, useScrollReveal
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  resume.pdf      # ← place your resume PDF here
```

## Adding / Editing Content

All content lives in `src/data/`:

- **Projects** → `src/data/projects.js`
- **Skills** → `src/data/skills.js`
- **Education & Achievements** → `src/data/education.js`
- **Social links & headline** → `src/data/socials.js`

## Resume Download

Place your resume PDF at:

```
public/resume.pdf
```

The "Download Resume" button points to `/resume.pdf`.

## Contact Form

The form currently opens the user’s email client via `mailto:`.  
To connect a real backend later, replace the `handleSubmit` logic in `src/sections/Contact.jsx` with Formspree, EmailJS, Resend, or your own API.

## Deploy

### Vercel

```bash
npx vercel
```

Or connect the GitHub repo in the Vercel dashboard. Framework preset: Vite.

### Netlify

```bash
npx netlify deploy --prod --dir=dist
```

Or drag-and-drop the `dist` folder after `npm run build`.

## Notes

- No fabricated experience, metrics, or testimonials.
- All projects, skills, education, and achievements are taken from the provided resumes and matching GitHub repositories.
- LeetCode link in `socials.js` may need updating if your handle differs.

## License

Personal portfolio — feel free to reuse the structure.
