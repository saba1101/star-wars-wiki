import Link from "next/link";
import { getSwapiData } from "../../lib/swapi";
import { SWAPI } from "../../lib/swapi-req-types";
import { DetailRow } from "../../components/shared/DetailRow";
import { DetailList } from "../../components/shared/DetailList";

type Props = { params: Promise<{ id: string }> };

export default async function StarshipDetailPage({ params }: Props) {
  const { id } = await params;
  const [starship] = await getSwapiData(SWAPI.STARSHIPS, id);

  if (!starship) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-sky-300">Starship not found</h1>
        <Link
          href="/starships"
          className="mt-4 inline-block text-sky-200 underline"
        >
          Back to starships
        </Link>
      </div>
    );
  }

  const pilots = (starship.pilots as string[]) ?? [];
  const films = (starship.films as string[]) ?? [];

  return (
    <div className="mx-auto mt-10 max-w-4xl pb-16">
      <Link
        href="/starships"
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-sky-300"
      >
        ← Back to starships
      </Link>

      <div className="overflow-hidden rounded-2xl border border-sky-400/25 bg-sky-950/30 shadow-xl">
        <div className="border-b border-sky-400/20 bg-sky-900/40 px-8 py-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            <div>
              <h1 className="text-3xl font-bold text-sky-200">
                {starship.name as string}
              </h1>
              <p className="text-sky-200/70">
                {(starship.model as string) ?? "—"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-0 p-8">
          <DetailRow
            accent="sky"
            label="Manufacturer"
            value={starship.manufacturer as string}
          />
          <DetailRow
            accent="sky"
            label="Cost (credits)"
            value={starship.cost_in_credits as string}
          />
          <DetailRow
            accent="sky"
            label="Length"
            value={
              (starship.length as string) ? `${starship.length} m` : undefined
            }
          />
          <DetailRow
            accent="sky"
            label="Max atmosphering speed"
            value={
              (starship.max_atmosphering_speed as string)
                ? `${starship.max_atmosphering_speed}`
                : undefined
            }
          />
          <DetailRow
            accent="sky"
            label="Crew"
            value={starship.crew as string}
          />
          <DetailRow
            accent="sky"
            label="Passengers"
            value={starship.passengers as string}
          />
          <DetailRow
            accent="sky"
            label="Cargo capacity"
            value={starship.cargo_capacity as string}
          />
          <DetailRow
            accent="sky"
            label="Consumables"
            value={starship.consumables as string}
          />
          <DetailRow
            accent="sky"
            label="Hyperdrive rating"
            value={starship.hyperdrive_rating as string}
          />
          <DetailRow
            accent="sky"
            label="MGLT"
            value={starship.MGLT as string}
          />
          <DetailRow
            accent="sky"
            label="Starship class"
            value={starship.starship_class as string}
          />
        </div>

        <div className="border-t border-white/10 p-8">
          <h2 className="mb-4 text-lg font-semibold text-sky-300">
            Related resources
          </h2>
          <div className="space-y-4">
            <DetailList
              accent="sky"
              label="Pilots"
              items={pilots}
              basePath="/people"
            />
            <DetailList
              accent="sky"
              label="Films"
              items={films}
              basePath="/films"
            />
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-4">
          <div className="space-y-2 text-xs text-white/50">
            <DetailRow
              accent="sky"
              label="Created"
              value={starship.created as string}
            />
            <DetailRow
              accent="sky"
              label="Edited"
              value={starship.edited as string}
            />
            {(starship.url as string) && (
              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
                <span className="font-medium text-sky-200/70">API URL</span>
                <a
                  href={starship.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-sky-200/70 underline hover:text-sky-300"
                >
                  {starship.url as string}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
