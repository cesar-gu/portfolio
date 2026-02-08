import { computed, ref, onMounted, onUnmounted } from 'vue';
import { debounce, clampIndex, getItemsPerView } from '../utils/carousel';

interface UseProjectCarouselOptions {
  total: number;
  initialItemsPerView?: number;
  breakpoints?: Record<number, number>;
}

/**
 * Composable para manejar la lógica de carousel de proyectos
 */
export function useProjectCarousel(options: UseProjectCarouselOptions) {
  const {
    total,
    initialItemsPerView = 3,
    breakpoints = {
      1280: 3,
      1024: 2,
      0: 1,
    },
  } = options;

  const currentIndex = ref(0);
  const itemsPerView = ref(initialItemsPerView);
  const startX = ref<number | null>(null);
  const startY = ref<number | null>(null);

  let debouncedResize: ReturnType<typeof debounce>;

  const maxIndex = computed(() => Math.max(0, total - itemsPerView.value));
  const showControls = computed(() => total > itemsPerView.value);
  const pages = computed(() => maxIndex.value + 1);

  const activePage = computed(() => {
    const lastVisibleIdx = Math.min(currentIndex.value + itemsPerView.value - 1, total - 1);
    return Math.floor(lastVisibleIdx / itemsPerView.value);
  });

  const trackStyle = computed(() => ({
    transform: `translateX(${-(currentIndex.value * 100) / itemsPerView.value}%)`,
  }));

  const updateItemsPerView = () => {
    const newItemsPerView = getItemsPerView(window.innerWidth, breakpoints);
    itemsPerView.value = newItemsPerView;
    currentIndex.value = clampIndex(currentIndex.value, maxIndex.value);
  };

  const next = () => {
    if (maxIndex.value === 0) return;
    currentIndex.value = (currentIndex.value + 1) % (maxIndex.value + 1);
  };

  const prev = () => {
    if (maxIndex.value === 0) return;
    currentIndex.value = (currentIndex.value - 1 + (maxIndex.value + 1)) % (maxIndex.value + 1);
  };

  const goToPage = (pageIndex: number) => {
    currentIndex.value = clampIndex(pageIndex * itemsPerView.value, maxIndex.value);
  };

  const onTouchStart = (e: TouchEvent) => {
    startX.value = e.touches?.[0]?.clientX ?? null;
    startY.value = e.touches?.[0]?.clientY ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (startX.value == null || startY.value == null) return;
    const endX = e.changedTouches?.[0]?.clientX;
    const endY = e.changedTouches?.[0]?.clientY;
    if (endX == null || endY == null) return;

    const dx = endX - startX.value;
    const dy = endY - startY.value;

    // Only perform swipe if horizontal movement is significantly greater than vertical movement
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault?.();
      dx < 0 ? next() : prev();
    }
    startX.value = null;
    startY.value = null;
  };

  onMounted(() => {
    updateItemsPerView();
    debouncedResize = debounce(updateItemsPerView, 200);
    window.addEventListener('resize', debouncedResize, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', debouncedResize);
  });

  return {
    maxIndex,
    showControls,
    pages,
    activePage,
    trackStyle,
    next,
    prev,
    goToPage,
    onTouchStart,
    onTouchEnd,
  };
}
