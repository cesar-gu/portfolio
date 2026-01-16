/**
 * Social Media Utilities
 * Funciones compartidas para redes sociales
 */

export const getSocialNavClass = (network: string): string => {
  const baseClass = 'p-2 text-gray-400 transition-all transform hover:scale-110 rounded-lg';

  switch (network) {
    case 'LinkedIn':
      return `${baseClass} hover:text-primary-400 hover:bg-primary-500/10`;
    case 'GitHub':
      return `${baseClass} hover:text-white hover:bg-gray-700/50`;
    case 'GitLab':
      return `${baseClass} hover:text-accent-orange hover:bg-accent-orange/10`;
    default:
      return baseClass;
  }
};

export const getSocialFooterClass = (network: string): string => {
  const baseClass =
    'group relative w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg';

  switch (network) {
    case 'LinkedIn':
      return `${baseClass} hover:bg-primary-600 hover:shadow-primary-600/50`;
    case 'GitHub':
      return `${baseClass} hover:bg-gray-700 hover:shadow-gray-600/50`;
    case 'GitLab':
      return `${baseClass} hover:bg-accent-orange hover:shadow-accent-orange/50`;
    default:
      return baseClass;
  }
};

export const SOCIAL_NETWORK_NAMES = ['LinkedIn', 'GitHub', 'GitLab'] as const;
