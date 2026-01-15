<template>
  <div class="text-center mb-20" data-aos="fade-up">
    <h2 class="text-base md:text-lg uppercase tracking-widest text-accent-orange font-bold mb-4">
      {{ label }}
    </h2>
    <h2 class="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
      {{ title }}
      <span
        class="bg-gradient-to-r from-primary-600 via-accent-orange to-primary-500 bg-clip-text text-transparent"
      >
        {{ highlight }}
      </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { SectionHeaderProps } from '../models/ComponentProps';

defineProps<SectionHeaderProps>();
</script>

<style scoped>
/* Styles handled by Tailwind */
</style>
