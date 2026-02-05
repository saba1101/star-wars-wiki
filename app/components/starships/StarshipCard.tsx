import Link from "next/link";
import { getResourceId } from "../shared/resourceId";

type StarshipRecord = Record<string, unknown>;

type StarshipCardProps = { starship: StarshipRecord };

export function StarshipCard({ starship }: StarshipCardProps) {
  const id = getResourceId(starship.url as string);
  const name = (starship.name as string) ?? "Unknown";

  return (
    <Link
      href={`/starships/${id}`}
      className="group flex flex-col rounded-lg border border-sky-400/25 bg-sky-950/30 p-5 shadow-md transition-all hover:border-sky-300/50 hover:bg-sky-900/40"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="text-2xl">🚀</span>
        <span className="rounded bg-sky-400/20 px-2 py-0.5 font-mono text-xs text-sky-200/80">
          {(starship.starship_class as string) ?? "—"}
        </span>
      </div>
      <h3 className="text-lg font-bold text-sky-200">{name}</h3>
      <p className="mt-1 text-sm text-white/60">
        {(starship.model as string) ?? "—"}
      </p>
      <p className="mt-2 text-xs text-sky-200/70">
        {(starship.manufacturer as string) ?? "—"}
      </p>
      <div className="mt-3 flex gap-4 border-t border-white/10 pt-3 text-xs text-white/50">
        <span>{(starship.length as string) ?? "—"} m</span>
        <span>Crew: {(starship.crew as string) ?? "—"}</span>
      </div>
    </Link>
  );
}
