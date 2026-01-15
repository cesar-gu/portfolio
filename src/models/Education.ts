/**
 * Education Model
 * Educación y formación académica
 */

export interface Education {
  institution: string;
  studyType: string;
  area: string;
  startDate: string;
  endDate: string;
  score?: string;
  fileUrl?: string;
}
