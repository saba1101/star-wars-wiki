import Link from "next/link";
import { getSwapiData } from "../../lib/swapi";
import { SWAPI } from "../../lib/swapi-req-types";
import { DetailRow } from "../../components/shared/DetailRow";
import { DetailList } from "../../components/shared/DetailList";

type Props = { params: Promise<{ id: string }> };

export default async function VehicleDetailPage({ params }: Props) {
  const { id } = await params;
  const [vehicle] = await getSwapiData(SWAPI.VEHICLES, id);

  if (!vehicle) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-orange-300">Vehicle not found</h1>
        <Link href="/vehicles" className="mt-4 inline-block text-orange-200 underline">
          Back to vehicles
        </Link>
      </div>
    );
  }

  const pilots = (vehicle.pilots as string[]) ?? [];
  const films = (vehicle.films as string[]) ?? [];

  return (
    <div className="mx-auto mt-10 max-w-4xl pb-16">
      <Link
        href="/vehicles"
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-orange-300"
      >
        ← Back to vehicles
      </Link>

      <div className="overflow-hidden rounded-2xl border border-orange-400/20 bg-black/50 shadow-xl">
        <div className="flex items-center gap-4 border-b border-orange-400/20 bg-orange-950/40 px-8 py-6">
          <span className="text-4xl">🚗</span>
          <div>
            <h1 className="text-3xl font-bold text-orange-200">
              {vehicle.name as string}
            </h1>
            <p className="text-orange-200/70">
              {(vehicle.model as string) ?? "—"}
            </p>
          </div>
        </div>

        <div className="space-y-0 p-8">
          <DetailRow accent="orange" label="Manufacturer" value={vehicle.manufacturer as string} />
          <DetailRow accent="orange" label="Cost (credits)" value={vehicle.cost_in_credits as string} />
          <DetailRow accent="orange" label="Length" value={(vehicle.length as string) ? `${vehicle.length} m` : undefined} />
          <DetailRow accent="orange" label="Max atmosphering speed" value={vehicle.max_atmosphering_speed as string} />
          <DetailRow accent="orange" label="Crew" value={vehicle.crew as string} />
          <DetailRow accent="orange" label="Passengers" value={vehicle.passengers as string} />
          <DetailRow accent="orange" label="Cargo capacity" value={vehicle.cargo_capacity as string} />
          <DetailRow accent="orange" label="Consumables" value={vehicle.consumables as string} />
          <DetailRow accent="orange" label="Vehicle class" value={vehicle.vehicle_class as string} />
        </div>

        <div className="border-t border-white/10 p-8">
          <h2 className="mb-4 text-lg font-semibold text-orange-300">
            Related resources
          </h2>
          <div className="space-y-4">
            <DetailList accent="orange" label="Pilots" items={pilots} basePath="/people" />
            <DetailList accent="orange" label="Films" items={films} basePath="/films" />
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-4">
          <div className="space-y-2 text-xs text-white/50">
            <DetailRow accent="orange" label="Created" value={vehicle.created as string} />
            <DetailRow accent="orange" label="Edited" value={vehicle.edited as string} />
            {vehicle.url && (
              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
                <span className="font-medium text-orange-200/70">API URL</span>
                <a
                  href={vehicle.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-orange-200/70 underline hover:text-orange-300"
                >
                  {vehicle.url as string}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
