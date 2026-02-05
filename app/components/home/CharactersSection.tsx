import Link from "next/link";
import { PersonCard } from "../people/PersonCard";

type Person = Record<string, unknown>;

type CharactersSectionProps = {
  people: Person[];
};

export function CharactersSection({ people }: CharactersSectionProps) {
  return (
    <section className="mt-16 flex w-full flex-col rounded-2xl bg-cyan-300/5 p-8 backdrop-blur-xl">
      <div className="mb-8 flex flex-row items-start justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-extrabold text-amber-300">
            Star Wars: Characters
          </h2>
          <p className="max-w-lg text-lg text-white/70">
            Discover quick overviews of key Star Wars characters. Dive deeper
            into their stories and background!
          </p>
        </div>
        <Link
          href="/people"
          className="rounded-lg bg-amber-300/40 px-5 py-2 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {people.slice(0, 4).map((person, index) => (
          <PersonCard
            key={(person.url as string) ?? index}
            person={person}
          />
        ))}
      </div>
    </section>
  );
}
