import Link from "next/link";
import Image from "next/image";

type Person = Record<string, unknown>;

type CharactersSectionProps = {
  people: Person[];
};

function personImagePath(name: string): string {
  if (name.includes("Luke")) return "/images/luke.jpg";
  if (name.includes("Vader")) return "/images/vader.jpg";
  if (name.includes("R2-D2")) return "/images/r2.jpg";
  if (name.includes("3PO")) return "/images/cpo.jpg";
  return "/images/default.png";
}

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
          <div
            key={index}
            className="group relative flex w-76 max-w-full flex-col rounded-2xl border border-white/25 bg-gradient-to-br from-black/80 to-indigo-900/40 p-0 shadow-lg transition-all duration-300 hover:scale-[1.025] hover:border-amber-200/60 hover:bg-black/60"
            style={{ minHeight: "320px" }}
          >
            <div className="from-white-900/70 flex h-48 w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-b to-black/70 shadow-inner">
              <Image
                src={personImagePath(person.name as string)}
                alt={person.name as string}
                width={300}
                height={250}
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col px-6 py-6">
              <h3 className="mb-1 truncate text-2xl font-bold text-amber-300">
                {person.name as string}
              </h3>
              <span className="mb-2 font-mono text-base text-white/60">
                Birth: {person.birth_year as string}
              </span>
              <p className="mb-3 line-clamp-3 text-base text-white/80 italic">
                {(person.description as string)?.split("\n")[0] ??
                  "A mysterious figure from the galaxy."}
              </p>
              <div className="mt-auto flex flex-row flex-wrap gap-x-6 gap-y-2">
                <div className="flex flex-row items-center gap-1">
                  <span className="text-sm font-semibold text-amber-200">
                    Gender:
                  </span>
                  <span className="text-sm text-white/70">
                    {person.gender as string}
                  </span>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <span className="text-sm font-semibold text-amber-200">
                    Height:
                  </span>
                  <span className="text-sm text-white/60">
                    {person.height as string} cm
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
