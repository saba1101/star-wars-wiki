export function DetailRow({
  label,
  value,
  accent = "amber",
}: {
  label: string;
  value: string | number | null | undefined;
  accent?: "amber" | "indigo" | "emerald" | "sky" | "orange" | "violet";
}) {
  if (value == null || value === "") return null;
  const accentClass =
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
    <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 py-2">
      <span className={`font-medium ${accentClass}`}>{label}</span>
      <span className="text-white/90">{String(value)}</span>
    </div>
  );
}
