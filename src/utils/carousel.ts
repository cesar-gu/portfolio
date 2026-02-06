/**
 * Utilidades para carousels y sliders
 */

/**
 * Debounce: retrasa la ejecución de una función hasta que dejen de ocurrir eventos
 */
export function debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Clampea un índice entre 0 y un máximo
 */
export function clampIndex(index: number, max: number): number {
  return Math.max(0, Math.min(index, max));
}

/**
 * Calcula el número de items visibles según el ancho de la ventana
 */
export function getItemsPerView(width: number, breakpoints: Record<number, number>): number {
  const sortedBreakpoints = Object.entries(breakpoints).sort(([a], [b]) => Number(b) - Number(a));

  for (const [breakpoint, items] of sortedBreakpoints) {
    if (width >= Number(breakpoint)) {
      return items;
    }
  }
  return 1;
}
