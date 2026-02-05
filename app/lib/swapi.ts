const SWAPI_BASE = "https://swapi.info/api";
import { SWAPI } from "./swapi-req-types";

type SwapiResource = Record<string, unknown>;

export async function getSwapiData(
  type: SWAPI,
  id: number | string | null,
): Promise<SwapiResource[]> {
  const url = `${SWAPI_BASE}/${type}/${id ?? ""}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`SWAPI request failed: ${res.status} ${res.statusText} (${url})`);
  }

  let data: unknown;
  try {
    data = await res.json();
  } catch {
    throw new Error(`SWAPI invalid response (${url})`);
  }

  return Array.isArray(data) ? (data as SwapiResource[]) : [data as SwapiResource];
}
