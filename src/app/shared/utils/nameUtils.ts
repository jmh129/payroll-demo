// src/app/utils/nameUtils.ts

/**
 * A simple utility class for handling name-related operations
 */
export class NameUtils {
  /**
   * Creates a possessive form of a name, handling both singular and plural names
   * - For singular names (not ending in 's'): add 's (e.g., "John" -> "John's")
   * - For plural names (ending in 's'): add just an apostrophe (e.g., "Employees" -> "Employees'")
   *
   * @param name - The name to convert to possessive form
   * @returns The possessive form of the name
   */
  static toPossessive(name: string): string {
    if (!name || name.trim().length === 0) return name;

    return name.endsWith('s') ? `${name}'` : `${name}'s`;
  }

  /**
   * Formats a message with a name, properly handling possessives
   * Example: formatWithName("John", "profile updated") -> "John's profile updated"
   * Example: formatWithName("Employees", "data saved") -> "Employees' data saved"
   *
   * @param name - The name to use (singular or plural)
   * @param message - The message to append after the possessive name
   * @returns The formatted message with correct possessive form
   */
  static formatWithName(name: string, message: string): string {
    return `${this.toPossessive(name)} ${message}`;
  }
}
