export function getElementId(name: string) {
  if (!name) return '';
  return name?.toLowerCase()?.replace(/ /g, '-');
}
