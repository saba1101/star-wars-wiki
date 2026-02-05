import Link from "next/link";
import { getSwapiData } from "../../lib/swapi";
import { SWAPI } from "../../lib/swapi-req-types";
import { DetailRow } from "../../components/shared/DetailRow";
import { DetailList } from "../../components/shared/DetailList";

type Props = { params: Promise<{ id: string }> };

export default async function FilmDetailPage({ params }: Props) {
  const { id } = await params;
  const [film] = await getSwapiData(SWAPI.FILMS, id);

  if (!film) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-indigo-300">Film not found</h1>
        <Link href="/films" className="mt-4 inline-block text-indigo-200 underline">
          Back to films
        </Link>
      </div>
    );
  }

  const characters = (film.characters as string[]) ?? [];
  const planets = (film.planets as string[]) ?? [];
  const starships = (film.starships as string[]) ?? [];
  const vehicles = (film.vehicles as string[]) ?? [];
  const species = (film.species as string[]) ?? [];
  const crawl = (film.opening_crawl as string) ?? "";

  return (
    <div className="mx-auto mt-10 max-w-4xl pb-16">
      <Link
        href="/films"
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-indigo-300"
      >
        ← Back to films
      </Link>

      <div className="overflow-hidden rounded-2xl border border-indigo-400/20 bg-black/50 shadow-xl">
        <div className="border-l-4 border-indigo-400 bg-indigo-950/40 px-8 py-6">
          <h1 className="text-3xl font-bold text-indigo-200">
            {film.title as string}
          </h1>
          <p className="mt-1 font-mono text-white/50">
            Episode {(film.episode_id as number) ?? "—"} · {film.release_date as string}
          </p>
        </div>

        <div className="space-y-0 p-8">
          <DetailRow accent="indigo" label="Director" value={film.director as string} />
          <DetailRow accent="indigo" label="Producer" value={film.producer as string} />
          <DetailRow accent="indigo" label="Release date" value={film.release_date as string} />
        </div>

        {crawl && (
          <div className="border-t border-white/10 p-8">
            <h2 className="mb-3 text-lg font-semibold text-indigo-300">
              Opening crawl
            </h2>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-white/80">
              {crawl}
            </p>
          </div>
        )}

        <div className="border-t border-white/10 p-8">
          <h2 className="mb-4 text-lg font-semibold text-indigo-300">
            Related resources
          </h2>
          <div className="space-y-4">
            <DetailList accent="indigo" label="Characters" items={characters} basePath="/people" />
            <DetailList accent="indigo" label="Planets" items={planets} basePath="/planets" />
            <DetailList accent="indigo" label="Starships" items={starships} basePath="/starships" />
            <DetailList accent="indigo" label="Vehicles" items={vehicles} basePath="/vehicles" />
            <DetailList accent="indigo" label="Species" items={species} basePath="/species" />
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-4">
          <div className="space-y-2 text-xs text-white/50">
            <DetailRow accent="indigo" label="Created" value={film.created as string} />
            <DetailRow accent="indigo" label="Edited" value={film.edited as string} />
            {film.url && (
              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
                <span className="font-medium text-indigo-200/70">API URL</span>
                <a
                  href={film.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-indigo-200/70 underline hover:text-indigo-300"
                >
                  {film.url as string}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
