// Resolves an in-page hash link (e.g. "#products") to work from any route —
// on the homepage it stays a plain anchor, elsewhere it points back to "/#products".
export function resolveHref(href: string, pathname: string): string {
  return href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
}
