<template>
  <div
    :class="[
      'group relative bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 overflow-hidden',
      borderColorClass,
      hoverClass,
      ...customClasses,
    ]"
    :data-aos="dataAos"
    :data-aos-delay="dataAosDelay"
  >
    <!-- Gradient overlay on hover -->
    <div
      :class="[
        'absolute inset-0 bg-gradient-to-br transition-all duration-300',
        gradientClass,
        rounded ? 'rounded-2xl' : '',
      ]"
    ></div>

    <!-- Content -->
    <div class="relative" :class="padding">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  borderColor?: 'primary' | 'orange' | 'green' | 'default';
  padding?: string;
  dataAos?: string;
  dataAosDelay?: number | string;
  customClasses?: string[];
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  borderColor: 'default',
  padding: 'p-8',
  dataAos: 'fade-up',
  dataAosDelay: 0,
  customClasses: () => [],
  rounded: true,
});

const borderColorClass = computed(() => {
  switch (props.borderColor) {
    case 'primary':
      return 'hover:border-primary-300 hover:shadow-xl hover:-translate-y-2';
    case 'orange':
      return 'hover:border-accent-orange/300 hover:shadow-xl hover:-translate-y-2';
    case 'green':
      return 'hover:border-accent-green/300 hover:shadow-xl hover:-translate-y-2';
    default:
      return 'hover:border-primary-300 hover:shadow-xl hover:-translate-y-2';
  }
});

const hoverClass = computed(() => {
  return 'hover:shadow-xl hover:-translate-y-2';
});

const gradientClass = computed(() => {
  switch (props.borderColor) {
    case 'primary':
      return 'from-primary-50/0 to-accent-orange/0 group-hover:from-primary-50 group-hover:to-accent-orange/5';
    case 'orange':
      return 'from-accent-orange/10 to-accent-orange/5 group-hover:from-accent-orange/20 group-hover:to-accent-orange/10';
    case 'green':
      return 'from-accent-green/10 to-accent-green/5 group-hover:from-accent-green/20 group-hover:to-accent-green/10';
    default:
      return 'from-primary-50/0 to-accent-orange/0 group-hover:from-primary-50 group-hover:to-accent-orange/5';
  }
});
</script>

<style scoped>
/* Card styles handled by Tailwind */
</style>
