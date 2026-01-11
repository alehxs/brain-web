# The BRAIN Center Website

The official website for **The BRAIN Center** (Building Reliable Advances and Innovations in Neurotechnology) — an NSF-funded Industry-University Cooperative Research Center (IUCRC) advancing neurotechnology research and innovation.

The BRAIN Center bridges academia, industry, government, and clinical communities to develop safe, effective, and affordable neurotechnologies for sensory, motor, affective, and cognitive functions.

## Why This Site Was Built

This site replaces a legacy WordPress website with a modern, maintainable architecture.

**Key improvements:**

- **Performance** — Static site generation, Turbopack builds, optimized images and video. Faster load times and better SEO.
- **Modularity** — Reusable React components and consistent design patterns. Easy to extend and maintain.
- **Modern Stack** — TypeScript for type safety, Tailwind for styling, component-based architecture. Better developer experience.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [TypeScript](https://www.typescriptlang.org/)

## Project Structure

```
src/
├── app/                  # Pages (App Router - folder-based routing)
│   ├── components/       # Reusable UI components
│   ├── about/            # About section pages
│   ├── research/         # Research thrusts, projects, facilities
│   ├── organization/     # Leadership, sites, faculty, students
│   ├── workforce/        # REU, training, student network
│   ├── impacts/          # Impact reports and assessments
│   ├── membership/       # Industry partnership info
│   └── ...
├── data/                 # Content data files (TypeScript)
│   ├── people.ts         # Faculty & student profiles
│   ├── news.ts           # News articles
│   ├── events.ts         # Upcoming events
│   ├── projects.ts       # Research projects
│   ├── publications.ts   # Academic publications
│   ├── sites.ts          # BRAIN Center site locations
│   └── thrusts.ts        # Research thrust areas
└── types/                # TypeScript type definitions

public/                   # Static assets (images, videos, documents)
├── people/               # Faculty and student photos
├── media/                # News and media images
└── ...
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Management

Content is stored as TypeScript data files in `src/data/`. This approach provides type safety and makes content easy to update without touching component code.

For detailed instructions on adding faculty, news, events, publications, and other content, see **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)**.

## Deployment

This is a standard Next.js application. Deploy to any platform that supports Next.js:

- [Vercel](https://vercel.com/) (recommended, zero-config)
- [Netlify](https://www.netlify.com/)
- Any Node.js hosting environment

```bash
npm run build
npm start
```
