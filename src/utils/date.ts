/**
 * Date Utilities
 * Funciones compartidas para formateo de fechas
 */

export const formatDate = (dateStr: string): string => {
  if (!dateStr) return 'Actualidad';

  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  const formatter = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
  });

  return formatter.format(date);
};
