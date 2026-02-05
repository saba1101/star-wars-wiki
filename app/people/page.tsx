import { getSwapiData } from "../lib/swapi";
import { SWAPI } from "../lib/swapi-req-types";
import { PersonCard } from "../components/people/PersonCard";

export default async function PeoplePage() {
  const people = await getSwapiData(SWAPI.PEOPLE, null);

  return (
    <div className="mx-auto mt-10 max-w-7xl">
      <h1 className="mb-2 text-4xl font-bold text-amber-300">Characters</h1>
      <p className="mb-10 text-white/60">
        Browse all characters from the Star Wars universe. Click a card to see
        full details.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person, index) => (
          <PersonCard key={(person.url as string) ?? index} person={person} />
        ))}
      </div>
    </div>
  );
}
