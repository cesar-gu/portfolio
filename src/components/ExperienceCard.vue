<template>
  <Card :data-aos="'fade-up'" :data-aos-delay="delay" border-color="primary">
    <!-- Header: Position, Company, Location -->
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
      <div>
        <h3
          class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent"
        >
          {{ experience.position }}
        </h3>
        <p class="text-lg font-semibold text-gray-700 mt-1">
          {{ experience.name }}
          <span class="text-sm text-gray-500">📍{{ experience.location }}</span>
        </p>
      </div>
      <div class="text-left md:text-right">
        <p class="text-sm font-semibold text-gray-600 whitespace-nowrap">
          {{ formatDate(experience.startDate) }} - {{ formatDate(experience.endDate) }}
        </p>
        <p
          v-if="experience.isCurrentRole"
          class="text-xs font-bold text-accent-green mt-1 px-3 py-1 bg-accent-green/10 rounded-full inline-block md:inline-block"
        >
          ✓ Rol actual
        </p>
      </div>
    </div>

    <!-- Summary -->
    <p class="text-gray-700 mb-6 leading-relaxed">{{ experience.summary }}</p>

    <!-- Highlights -->
    <div class="mb-6">
      <h4 class="text-sm font-bold uppercase tracking-widest text-gray-600 mb-3">Destacados:</h4>
      <ul class="space-y-2">
        <li
          v-for="highlight in experience.highlights"
          :key="highlight"
          class="text-gray-600 text-sm flex gap-3"
        >
          <span class="text-accent-orange font-bold flex-shrink-0">→</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
      <span
        v-for="tech in extractTech(experience)"
        :key="tech"
        class="px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold border border-primary-200 hover:border-primary-400 hover:bg-primary-100 transition-all duration-200"
      >
        {{ tech }}
      </span>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { formatDate } from '../utils/date';
import { extractTecnologiesFromHighlights } from '../utils/tech';
import type { Experience } from '../models/Experience';
import Card from './Card.vue';

const props = defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
  knownTechs: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const extractTech = (exp: Experience): string[] => {
  return extractTecnologiesFromHighlights(exp.highlights, props.knownTechs);
};
</script>

<style scoped>
/* Styles handled by Tailwind */
</style>
