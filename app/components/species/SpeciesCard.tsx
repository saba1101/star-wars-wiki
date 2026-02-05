import Link from "next/link";
import { getResourceId } from "../shared/resourceId";

type SpeciesRecord = Record<string, unknown>;

type SpeciesCardProps = { species: SpeciesRecord };

export function SpeciesCard({ species: s }: SpeciesCardProps) {
  const id = getResourceId(s.url as string);
  const name = (s.name as string) ?? "Unknown";

  return (
    <Link
      href={`/species/${id}`}
      className="group flex flex-col rounded-2xl border border-violet-400/25 bg-violet-950/25 px-6 py-5 shadow-md transition-all hover:border-violet-300/50 hover:bg-violet-900/35"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">👽</span>
        <h3 className="text-lg font-bold text-violet-200">{name}</h3>
      </div>
      <p className="mt-2 text-sm capitalize text-violet-200/80">
        {(s.classification as string) ?? "—"}
      </p>
      <p className="mt-1 text-xs text-white/60">
        Language: {(s.language as string) ?? "—"}
      </p>
    </Link>
  );
}
