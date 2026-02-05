export function getResourceId(url: string | undefined): string {
  if (!url) return "";
  return url.replace(/\/$/, "").split("/").pop() ?? "";
}
