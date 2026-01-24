/**
 * Skill Model
 * Habilidades y competencias técnicas
 */

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Expertise {
  startOfExperience: number;
  technologiesMastered: number;
  projectsCompleted: number;
}
