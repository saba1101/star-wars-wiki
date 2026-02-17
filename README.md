# Star Wars Wiki

A modern Star Wars encyclopedia built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, powered by the [SWAPI API](https://swapi.info/).

Browse films, characters, planets, starships, vehicles, and species from the Star Wars universe — each with detailed pages showing every piece of data the API has to offer.

## Features

- **Six resource categories** — Films, People, Planets, Starships, Vehicles, Species
- **Grid listing pages** with styled cards for each category
- **Detail pages** that display all API fields, related resources with cross-linking, and metadata
- **Rich landing page** with hero section, category quick-links, and featured sections
- **Responsive design** — desktop navigation bar + mobile slide-in sidebar menu
- **Error handling** — per-route error boundaries with a "Try again" button
- **Server Components** — data is fetched on the server for fast initial loads
- **Component architecture** — reusable card components, shared detail helpers, and clean page composition

## Tech Stack

| Tool                                          | Version         |
| --------------------------------------------- | --------------- |
| [Next.js](https://nextjs.org/)                | 16 (App Router) |
| [React](https://react.dev/)                   | 19              |
| [Tailwind CSS](https://tailwindcss.com/)      | 4               |
| [TypeScript](https://www.typescriptlang.org/) | 5               |
| [SWAPI](https://swapi.info/)                  | Public REST API |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install & Run

```bash
# Clone the repo
git clone https://github.com/<your-username>/star-wars-wiki.git
cd star-wars-wiki

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/
│   ├── error/          # Reusable error fallback UI
│   ├── films/          # FilmCard
│   ├── home/           # Homepage sections (Hero, CategoryLinks, Films, Characters, Planets, Starships, Species)
│   ├── layout/         # Header, Footer, MobileMenu
│   ├── people/         # PersonCard, personImagePath
│   ├── planets/        # PlanetCard
│   ├── shared/         # DetailRow, DetailList, resourceId
│   ├── species/        # SpeciesCard
│   ├── starships/      # StarshipCard
│   └── vehicles/       # VehicleCard
├── films/              # /films listing + /films/[id] detail
├── people/             # /people listing + /people/[id] detail
├── planets/            # /planets listing + /planets/[id] detail
├── starships/          # /starships listing + /starships/[id] detail
├── vehicles/           # /vehicles listing + /vehicles/[id] detail
├── species/            # /species listing + /species/[id] detail
├── lib/                # SWAPI fetch helper + type definitions
├── page.tsx            # Landing page
├── layout.tsx          # Root layout
├── error.tsx           # Root error boundary
└── globals.css         # Global styles + background
```

## Data Source

All Star Wars data is provided by the **Star Wars API (SWAPI)** — [swapi.info](https://swapi.info/).

Star Wars data © Lucasfilm / Disney. This project is not affiliated with or endorsed by Lucasfilm or Disney.

## License

MIT
