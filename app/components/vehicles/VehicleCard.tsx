import Link from "next/link";
import { getResourceId } from "../shared/resourceId";

type VehicleRecord = Record<string, unknown>;

type VehicleCardProps = { vehicle: VehicleRecord };

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const id = getResourceId(vehicle.url as string);
  const name = (vehicle.name as string) ?? "Unknown";

  return (
    <Link
      href={`/vehicles/${id}`}
      className="group flex flex-row items-center gap-4 rounded-xl border border-orange-400/20 bg-black/50 py-4 pl-5 pr-6 shadow transition-all hover:border-orange-300/40 hover:bg-orange-950/30"
    >
      <span className="text-3xl">🚗</span>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-orange-200">{name}</h3>
        <p className="truncate text-sm text-white/60">
          {(vehicle.model as string) ?? "—"}
        </p>
        <p className="mt-0.5 text-xs text-orange-200/70">
          {(vehicle.vehicle_class as string) ?? "—"}
        </p>
      </div>
    </Link>
  );
}
