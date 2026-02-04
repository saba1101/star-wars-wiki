const SWAPI_BASE = "https://swapi.info/api";
import { SWAPI } from "./swapi-req-types";

type SwapiResource = Record<string, unknown>;

export async function getSwapiData(
  type: SWAPI,
  id: number | string | null,
): Promise<SwapiResource[]> {
  const res = await fetch(`${SWAPI_BASE}/${type}/${id ?? ""}`);
  const data = await res.json();
  console.log(data);
  return Array.isArray(data) ? data : [data];
}
