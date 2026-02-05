import { getSwapiData } from "../lib/swapi";
import { SWAPI } from "../lib/swapi-req-types";
import { SpeciesCard } from "../components/species/SpeciesCard";

export default async function SpeciesPage() {
  const species = await getSwapiData(SWAPI.SPECIES, null);

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <h1 className="mb-2 text-4xl font-bold text-violet-300">Species</h1>
      <p className="mb-10 text-white/60">
        Sentient species of the galaxy. Click for full details and related
        people and films.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {species.map((s, i) => (
          <SpeciesCard key={(s.url as string) ?? i} species={s} />
        ))}
      </div>
    </div>
  );
}
