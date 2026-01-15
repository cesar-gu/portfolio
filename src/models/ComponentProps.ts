/**
 * Component Props Models
 * Interfaces para props de componentes reutilizables
 */

export interface SocialLinkProps {
  href: string;
  network: string;
  variant?: 'nav' | 'footer';
}

export interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
}
