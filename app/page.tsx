import { getSwapiData } from "./lib/swapi";
import { SWAPI } from "./lib/swapi-req-types";
import {
  HeroSection,
  CategoryLinks,
  FilmsSection,
  CharactersSection,
  PlanetsSection,
  StarshipsSection,
  SpeciesSection,
} from "./components/home";
// import { Footer } from "./components/layout/Footer";

export default async function Home() {
  const types = Object.values(SWAPI);
  const entries = await Promise.all(
    types.map(async (type) => [type, await getSwapiData(type, null)] as const),
  );
  const data = Object.fromEntries(entries) as Record<
    string,
    Awaited<ReturnType<typeof getSwapiData>>
  >;

  const counts = Object.fromEntries(
    types.map((type) => [type, data[type].length]),
  );

  return (
    <div className="mt-20 flex w-full flex-col items-stretch pb-12">
      <HeroSection />
      <CategoryLinks types={types} counts={counts} />
      <FilmsSection films={data.films} />
      <CharactersSection people={data.people} />
      <PlanetsSection planets={data.planets} />
      <StarshipsSection starships={data.starships} />
      <SpeciesSection species={data.species} />
      {/* <Footer /> */}
    </div>
  );
}
