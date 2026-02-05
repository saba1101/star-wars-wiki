import Link from "next/link";
import { getResourceId } from "../shared/resourceId";

type FilmRecord = Record<string, unknown>;

type FilmCardProps = { film: FilmRecord };

export function FilmCard({ film }: FilmCardProps) {
  const id = getResourceId(film.url as string);
  const title = (film.title as string) ?? "Unknown";
  const release = (film.release_date as string) ?? "";
  const director = (film.director as string) ?? "";
  const crawl = (film.opening_crawl as string)?.split("\r\n")[0] ?? "";

  return (
    <Link
      href={`/films/${id}`}
      className="group flex flex-col rounded-xl border-l-4 border-indigo-400/80 bg-black/40 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-indigo-300 hover:bg-indigo-950/30"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-3xl opacity-90">🎬</span>
        <div>
          <h3 className="text-xl font-bold text-indigo-200">{title}</h3>
          <span className="font-mono text-sm text-white/50">{release}</span>
        </div>
      </div>
      {crawl && (
        <p className="mb-3 line-clamp-2 text-sm italic text-white/60">
          {crawl}
        </p>
      )}
      {director && (
        <p className="mt-auto text-xs text-indigo-200/80">Director: {director}</p>
      )}
    </Link>
  );
}
