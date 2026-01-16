/**
 * Skill Model
 * Habilidades y competencias técnicas
 */

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Expertise {
  yearsExperience: string;
  technologiesMastered: string;
  projectsCompleted: string;
}
