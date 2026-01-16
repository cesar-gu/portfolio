/**
 * Technology Utilities
 * Funciones compartidas para extracción y procesamiento de tecnologías
 */

export const extractTecnologiesFromText = (text: string, knownTechs: string[]): string[] => {
  const techSet = new Set<string>();

  knownTechs.forEach((tech) => {
    const regex = new RegExp(`\\b${tech}\\b`, 'i');
    if (regex.test(text)) {
      techSet.add(tech);
    }
  });

  return Array.from(techSet);
};

export const extractTecnologiesFromHighlights = (
  highlights: string[],
  knownTechs: string[]
): string[] => {
  const fullText = highlights.join(' ');
  return extractTecnologiesFromText(fullText, knownTechs);
};
