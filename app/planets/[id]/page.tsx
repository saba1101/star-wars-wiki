import Link from "next/link";
import Image from "next/image";
import { getSwapiData } from "../../lib/swapi";
import { SWAPI } from "../../lib/swapi-req-types";
import { DetailRow } from "../../components/shared/DetailRow";
import { DetailList } from "../../components/shared/DetailList";

type Props = { params: Promise<{ id: string }> };

export default async function PlanetDetailPage({ params }: Props) {
  const { id } = await params;
  const [planet] = await getSwapiData(SWAPI.PLANETS, id);

  if (!planet) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-emerald-300">
          Planet not found
        </h1>
        <Link
          href="/planets"
          className="mt-4 inline-block text-emerald-200 underline"
        >
          Back to planets
        </Link>
      </div>
    );
  }

  const residents = (planet.residents as string[]) ?? [];
  const films = (planet.films as string[]) ?? [];

  return (
    <div className="mx-auto mt-10 max-w-4xl pb-16">
      <Link
        href="/planets"
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-emerald-300"
      >
        ← Back to planets
      </Link>

      <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-black/50 shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-shrink-0 items-center justify-center bg-gradient-to-b from-emerald-900/50 to-black/70 p-10 md:w-72">
            <Image
              src="/images/default.png"
              alt={planet.name as string}
              width={200}
              height={200}
              className="rounded-full object-cover ring-2 ring-emerald-400/30"
            />
          </div>
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-emerald-200">
              {planet.name as string}
            </h1>
            <div className="mt-6 space-y-0">
              <DetailRow
                accent="emerald"
                label="Rotation period"
                value={planet.rotation_period as string}
              />
              <DetailRow
                accent="emerald"
                label="Orbital period"
                value={planet.orbital_period as string}
              />
              <DetailRow
                accent="emerald"
                label="Diameter"
                value={
                  (planet.diameter as string)
                    ? `${planet.diameter} km`
                    : undefined
                }
              />
              <DetailRow
                accent="emerald"
                label="Climate"
                value={planet.climate as string}
              />
              <DetailRow
                accent="emerald"
                label="Gravity"
                value={planet.gravity as string}
              />
              <DetailRow
                accent="emerald"
                label="Terrain"
                value={planet.terrain as string}
              />
              <DetailRow
                accent="emerald"
                label="Surface water"
                value={
                  (planet.surface_water as string)
                    ? `${planet.surface_water}%`
                    : undefined
                }
              />
              <DetailRow
                accent="emerald"
                label="Population"
                value={planet.population as string}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-8">
          <h2 className="mb-4 text-lg font-semibold text-emerald-300">
            Related resources
          </h2>
          <div className="space-y-4">
            <DetailList
              accent="emerald"
              label="Residents"
              items={residents}
              basePath="/people"
            />
            <DetailList
              accent="emerald"
              label="Films"
              items={films}
              basePath="/films"
            />
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-4">
          <div className="space-y-2 text-xs text-white/50">
            <DetailRow
              accent="emerald"
              label="Created"
              value={planet.created as string}
            />
            <DetailRow
              accent="emerald"
              label="Edited"
              value={planet.edited as string}
            />
            {(planet.url as string) && (
              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
                <span className="font-medium text-emerald-200/70">API URL</span>
                <a
                  href={planet.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-emerald-200/70 underline hover:text-emerald-300"
                >
                  {planet.url as string}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
