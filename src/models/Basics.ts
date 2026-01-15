/**
 * Basics Model
 * Información básica del perfil
 */

export interface Profile {
  network: string;
  username?: string;
  url: string;
}

export interface Location {
  address: string;
  country: string;
}

export interface Basics {
  name: string;
  brandName: string;
  email: string;
  career?: string;
  specialization?: string;
  summary: string;
  summaryShort?: string;
  image?: string;
  url: string;
  location: Location;
  profiles: Profile[];
  featuredTechs?: string[];
}
