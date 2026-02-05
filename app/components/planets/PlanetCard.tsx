import Link from "next/link";
import Image from "next/image";
import { getResourceId } from "../shared/resourceId";

type PlanetRecord = Record<string, unknown>;

type PlanetCardProps = { planet: PlanetRecord };

export function PlanetCard({ planet }: PlanetCardProps) {
  const id = getResourceId(planet.url as string);
  const name = (planet.name as string) ?? "Unknown";

  return (
    <Link
      href={`/planets/${id}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-emerald-400/20 bg-black/40 shadow-lg transition-all hover:scale-[1.02] hover:border-emerald-300/40 hover:shadow-emerald-500/10"
    >
      <div className="relative flex h-36 items-center justify-center bg-gradient-to-b from-emerald-900/50 to-black/60">
        <Image
          src="/images/default.png"
          alt={name}
          width={140}
          height={140}
          className="rounded-full object-cover opacity-80 ring-2 ring-emerald-400/30 transition group-hover:ring-emerald-300/50"
        />
      </div>
      <div className="flex flex-col p-5">
        <h3 className="text-xl font-bold text-emerald-200">{name}</h3>
        <p className="mt-1 text-sm text-white/60">
          Pop. {(planet.population as string) ?? "—"}
        </p>
        <p className="mt-2 text-xs capitalize text-emerald-200/80">
          {(planet.climate as string) ?? "—"} · {(planet.terrain as string) ?? "—"}
        </p>
      </div>
    </Link>
  );
}
