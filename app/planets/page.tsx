import { getSwapiData } from "../lib/swapi";
import { SWAPI } from "../lib/swapi-req-types";
import { PlanetCard } from "../components/planets/PlanetCard";

export default async function PlanetsPage() {
  const planets = await getSwapiData(SWAPI.PLANETS, null);

  return (
    <div className="mx-auto mt-10 max-w-7xl">
      <h1 className="mb-2 text-4xl font-bold text-emerald-300">Planets</h1>
      <p className="mb-10 text-white/60">
        Explore worlds of the galaxy. Click a planet for full details and
        residents.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {planets.map((planet, i) => (
          <PlanetCard key={(planet.url as string) ?? i} planet={planet} />
        ))}
      </div>
    </div>
  );
}
