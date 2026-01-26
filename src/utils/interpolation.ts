/**
 * Utilidades para interpolación de texto con placeholders dinámicos
 */

/**
 * Interpola placeholders en un texto usando datos dinámicos
 * @param text - Texto con placeholders como {year}, {name}, etc.
 * @param data - Objeto con los valores a reemplazar
 * @returns Texto con placeholders reemplazados
 */
export function interpolateText(text: string, data: Record<string, string | number>): string {
  return text.replace(/{(\w+)}/g, (match, key) => {
    return data[key]?.toString() ?? match;
  });
}

/**
 * Interpola años de experiencia en un texto
 * @param text - Texto con placeholder {year}
 * @param startOfExperience - Año de inicio de experiencia
 * @returns Texto con años calculados
 */
export function interpolateYears(text: string, startOfExperience: number): string {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startOfExperience;

  return interpolateText(text, { year: years });
}
