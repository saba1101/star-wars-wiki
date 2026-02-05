export function personImagePath(name: string): string {
  if (name.includes("Luke")) return "/images/luke.jpg";
  if (name.includes("Vader")) return "/images/vader.jpg";
  if (name.includes("R2-D2")) return "/images/r2.jpg";
  if (name.includes("3PO")) return "/images/cpo.jpg";
  return "/images/default.png";
}
