import Link from "next/link";
import Image from "next/image";
import { personImagePath } from "./personImagePath";

export type PersonRecord = Record<string, unknown>;

type PersonCardProps = {
  person: PersonRecord;
};

function getPersonId(person: PersonRecord): string {
  const url = person.url as string | undefined;
  if (url) {
    const id = url.replace(/\/$/, "").split("/").pop();
    if (id) return id;
  }
  return String(person.name ?? "");
}

export function PersonCard({ person }: PersonCardProps) {
  const id = getPersonId(person);
  const name = (person.name as string) ?? "Unknown";

  return (
    <Link
      href={`/people/${id}`}
      className="group relative flex max-w-full flex-col rounded-2xl border border-white/25 bg-gradient-to-br from-black/80 to-indigo-900/40 p-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-amber-200/60 hover:bg-black/60"
      style={{ minHeight: "320px" }}
    >
      <div className="from-white-900/70 flex h-48 w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-b to-black/70 shadow-inner">
        <Image
          src={personImagePath(name)}
          alt={name}
          width={300}
          height={250}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col px-6 py-5">
        <h3 className="mb-1 truncate text-xl font-bold text-amber-300">
          {name}
        </h3>
        <span className="mb-2 font-mono text-sm text-white/60">
          Birth: {(person.birth_year as string) ?? "—"}
        </span>
        <div className="mt-auto flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm">
          <span className="text-white/70">
            {(person.gender as string) ?? "—"}
          </span>
          <span className="text-white/60">
            {(person.height as string) ?? "—"} cm
          </span>
        </div>
      </div>
    </Link>
  );
}
