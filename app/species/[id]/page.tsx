import Link from "next/link";
import { getSwapiData } from "../../lib/swapi";
import { SWAPI } from "../../lib/swapi-req-types";
import { DetailRow } from "../../components/shared/DetailRow";
import { DetailList } from "../../components/shared/DetailList";

type Props = { params: Promise<{ id: string }> };

export default async function SpeciesDetailPage({ params }: Props) {
  const { id } = await params;
  const [species] = await getSwapiData(SWAPI.SPECIES, id);

  if (!species) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-violet-300">
          Species not found
        </h1>
        <Link
          href="/species"
          className="mt-4 inline-block text-violet-200 underline"
        >
          Back to species
        </Link>
      </div>
    );
  }

  const people = (species.people as string[]) ?? [];
  const films = (species.films as string[]) ?? [];
  const homeworld = species.homeworld as string | undefined;

  return (
    <div className="mx-auto mt-10 max-w-4xl pb-16">
      <Link
        href="/species"
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-violet-300"
      >
        ← Back to species
      </Link>

      <div className="overflow-hidden rounded-2xl border border-violet-400/25 bg-violet-950/25 shadow-xl">
        <div className="flex items-center gap-4 border-b border-violet-400/20 bg-violet-900/40 px-8 py-6">
          <span className="text-4xl">👽</span>
          <div>
            <h1 className="text-3xl font-bold text-violet-200">
              {species.name as string}
            </h1>
            <p className="text-violet-200/70 capitalize">
              {(species.classification as string) ?? "—"}
            </p>
          </div>
        </div>

        <div className="space-y-0 p-8">
          <DetailRow
            accent="violet"
            label="Designation"
            value={species.designation as string}
          />
          <DetailRow
            accent="violet"
            label="Average height"
            value={
              (species.average_height as string)
                ? `${species.average_height} cm`
                : undefined
            }
          />
          <DetailRow
            accent="violet"
            label="Skin colors"
            value={species.skin_colors as string}
          />
          <DetailRow
            accent="violet"
            label="Hair colors"
            value={species.hair_colors as string}
          />
          <DetailRow
            accent="violet"
            label="Eye colors"
            value={species.eye_colors as string}
          />
          <DetailRow
            accent="violet"
            label="Average lifespan"
            value={species.average_lifespan as string}
          />
          <DetailRow
            accent="violet"
            label="Language"
            value={species.language as string}
          />
        </div>

        <div className="border-t border-white/10 p-8">
          <h2 className="mb-4 text-lg font-semibold text-violet-300">
            Related resources
          </h2>
          <div className="space-y-4">
            {homeworld && (
              <div className="border-b border-white/10 py-2">
                <span className="mb-1 block font-medium text-violet-200/90">
                  Homeworld
                </span>
                <Link
                  href={`/planets/${homeworld.replace(/\/$/, "").split("/").pop()}`}
                  className="rounded bg-white/10 px-2 py-1 text-sm text-violet-200/90 hover:bg-violet-300/20"
                >
                  Planet {homeworld.replace(/\/$/, "").split("/").pop()}
                </Link>
              </div>
            )}
            <DetailList
              accent="violet"
              label="People"
              items={people}
              basePath="/people"
            />
            <DetailList
              accent="violet"
              label="Films"
              items={films}
              basePath="/films"
            />
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-4">
          <div className="space-y-2 text-xs text-white/50">
            <DetailRow
              accent="violet"
              label="Created"
              value={species.created as string}
            />
            <DetailRow
              accent="violet"
              label="Edited"
              value={species.edited as string}
            />
            {(species.url as string) && (
              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
                <span className="font-medium text-violet-200/70">API URL</span>
                <a
                  href={species.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-violet-200/70 underline hover:text-violet-300"
                >
                  {species.url as string}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
