import Link from "next/link";
import Image from "next/image";
import { getSwapiData } from "../../lib/swapi";
import { SWAPI } from "../../lib/swapi-req-types";
import { personImagePath } from "../../components/people/personImagePath";

type Props = { params: Promise<{ id: string }> };

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  if (value == null || value === "") return null;
  return (
    <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
      <span className="font-medium text-amber-200/90">{label}</span>
      <span className="text-white/90">{String(value)}</span>
    </div>
  );
}

function DetailList({
  label,
  items,
  basePath,
}: {
  label: string;
  items: string[];
  basePath: string;
}) {
  if (!items?.length) return null;
  return (
    <div className="border-b border-white/10 py-2">
      <span className="mb-1 block font-medium text-amber-200/90">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((url) => {
          const id = url.replace(/\/$/, "").split("/").pop();
          return (
            <Link
              key={url}
              href={`${basePath}/${id}`}
              className="rounded bg-white/10 px-2 py-1 text-sm text-amber-200/90 hover:bg-amber-300/20"
            >
              {id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default async function PersonDetailPage({ params }: Props) {
  const { id } = await params;
  const [person] = await getSwapiData(SWAPI.PEOPLE, id);

  if (!person) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-amber-300">
          Character not found
        </h1>
        <Link
          href="/people"
          className="mt-4 inline-block text-amber-200 underline"
        >
          Back to characters
        </Link>
      </div>
    );
  }

  const name = (person.name as string) ?? "Unknown";
  const films = (person.films as string[]) ?? [];
  const species = (person.species as string[]) ?? [];
  const vehicles = (person.vehicles as string[]) ?? [];
  const starships = (person.starships as string[]) ?? [];
  const homeworld = person.homeworld as string | undefined;

  return (
    <div className="mx-auto mt-10 max-w-4xl pb-16">
      <Link
        href="/people"
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-amber-300"
      >
        ← Back to characters
      </Link>

      <div className="overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-black/80 to-indigo-900/40 shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-64 w-full shrink-0 md:h-auto md:w-80">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b to-black/70">
              <Image
                src={personImagePath(name)}
                alt={name}
                width={320}
                height={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="flex-1 p-8">
            <h1 className="mb-6 text-3xl font-bold text-amber-300">{name}</h1>
            <div className="space-y-0">
              <DetailRow
                label="Height"
                value={
                  (person.height as string) ? `${person.height} cm` : undefined
                }
              />
              <DetailRow
                label="Mass"
                value={
                  (person.mass as string) ? `${person.mass} kg` : undefined
                }
              />
              <DetailRow
                label="Hair color"
                value={person.hair_color as string}
              />
              <DetailRow
                label="Skin color"
                value={person.skin_color as string}
              />
              <DetailRow label="Eye color" value={person.eye_color as string} />
              <DetailRow
                label="Birth year"
                value={person.birth_year as string}
              />
              <DetailRow label="Gender" value={person.gender as string} />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-8">
          <h2 className="mb-4 text-lg font-semibold text-amber-300">
            Related resources
          </h2>
          <div className="space-y-4">
            {homeworld && (
              <div className="border-b border-white/10 py-2">
                <span className="mb-1 block font-medium text-amber-200/90">
                  Homeworld
                </span>
                <Link
                  href={`/planets/${homeworld.replace(/\/$/, "").split("/").pop()}`}
                  className="rounded bg-white/10 px-2 py-1 text-sm text-amber-200/90 hover:bg-amber-300/20"
                >
                  Planet {homeworld.replace(/\/$/, "").split("/").pop()}
                </Link>
              </div>
            )}
            <DetailList label="Films" items={films} basePath="/films" />
            <DetailList label="Species" items={species} basePath="/species" />
            <DetailList
              label="Vehicles"
              items={vehicles}
              basePath="/vehicles"
            />
            <DetailList
              label="Starships"
              items={starships}
              basePath="/starships"
            />
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-4">
          <div className="space-y-2 text-xs text-white/50">
            <DetailRow label="Created" value={person.created as string} />
            <DetailRow label="Edited" value={person.edited as string} />
            {(person.url as string) && (
              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
                <span className="font-medium text-amber-200/70">API URL</span>
                <a
                  href={person.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-amber-200/70 underline hover:text-amber-300"
                >
                  {person.url as string}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
