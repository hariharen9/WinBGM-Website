export const SITE_PATHS = ["/", "/features", "/safety", "/download"] as const;

export type SitePath = (typeof SITE_PATHS)[number];
export type SitePage = "home" | "features" | "safety" | "download";

/** Collapse trailing slashes and fall back to the home page for unknown paths. */
export function normalizePath(pathname: string): SitePath {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return SITE_PATHS.find((path) => path === trimmed) ?? "/";
}

export function pageFromPath(pathname: SitePath): SitePage {
  return pathname === "/" ? "home" : (pathname.slice(1) as SitePage);
}
