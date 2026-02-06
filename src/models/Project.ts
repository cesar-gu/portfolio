export interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  url?: string;
  repository?: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  status: 'active' | 'inactive' | 'archived';
  role?: string;
  team?: string;
}

export interface ProjectGroup {
  name: string;
  projects: Project[];
}
