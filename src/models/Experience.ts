/**
 * Experience Model
 * Experiencia laboral
 */

export interface Experience {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  isCurrentRole?: boolean;
}
