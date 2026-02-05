import Link from "next/link";

const ACCENT_CLASS: Record<string, string> = {
  amber: "text-amber-200/90 hover:bg-amber-300/20",
  indigo: "text-indigo-200/90 hover:bg-indigo-300/20",
  emerald: "text-emerald-200/90 hover:bg-emerald-300/20",
  sky: "text-sky-200/90 hover:bg-sky-300/20",
  orange: "text-orange-200/90 hover:bg-orange-300/20",
  violet: "text-violet-200/90 hover:bg-violet-300/20",
};

export function DetailList({
  label,
  items,
  basePath,
  accent = "amber",
}: {
  label: string;
  items: string[];
  basePath: string;
  accent?: keyof typeof ACCENT_CLASS;
}) {
  if (!items?.length) return null;
  const labelClass =
    accent === "indigo"
      ? "text-indigo-200/90"
      : accent === "emerald"
        ? "text-emerald-200/90"
        : accent === "sky"
          ? "text-sky-200/90"
          : accent === "orange"
            ? "text-orange-200/90"
            : accent === "violet"
              ? "text-violet-200/90"
              : "text-amber-200/90";
  return (
    <div className="border-b border-white/10 py-2">
      <span className={`mb-1 block font-medium ${labelClass}`}>{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((url) => {
          const id = url.replace(/\/$/, "").split("/").pop();
          return (
            <Link
              key={url}
              href={`${basePath}/${id}`}
              className={`rounded bg-white/10 px-2 py-1 text-sm ${ACCENT_CLASS[accent] ?? ACCENT_CLASS.amber}`}
            >
              {id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
