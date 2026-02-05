import { getSwapiData } from "../lib/swapi";
import { SWAPI } from "../lib/swapi-req-types";
import { VehicleCard } from "../components/vehicles/VehicleCard";

export default async function VehiclesPage() {
  const vehicles = await getSwapiData(SWAPI.VEHICLES, null);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <h1 className="mb-2 text-4xl font-bold text-orange-300">Vehicles</h1>
      <p className="mb-10 text-white/60">
        Ground and air vehicles. Click for full specs and related films.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {vehicles.map((vehicle, i) => (
          <VehicleCard key={(vehicle.url as string) ?? i} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
