/**
 * Simple utility function to form the possessive form of a name
 * Handles both singular and plural names
 * @param name - The name to convert to possessive form
 * @returns The possessive form of the name
 */
export function toPossessive(name: string): string {
  if (!name || name.trim().length === 0) return name;

  // If the name already ends with 's', just add an apostrophe
  if (name.endsWith('s')) {
    return `${name}'`;
  }

  // Otherwise, add 's
  return `${name}'s`;
}

/**
 * Checks if a name is likely to be plural
 * @param name - The name to check
 * @returns True if the name is likely plural
 */
export function isPlural(name: string): boolean {
  if (!name || name.trim().length === 0) return false;
  return name.endsWith('s');
}
