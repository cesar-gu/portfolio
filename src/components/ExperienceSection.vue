<template>
  <section
    id="experience"
    class="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-40 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-40 left-20 w-72 h-72 bg-accent-orange rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Section Header -->
      <SectionHeader label="Trayectoria" title="Experiencia" highlight="Profesional" />

      <div class="space-y-6">
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="`${exp.name}-${exp.startDate}`"
          :experience="exp"
          :delay="index * 50"
          :known-techs="knownTechs"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import ExperienceCard from './ExperienceCard.vue';
import SectionHeader from './SectionHeader.vue';
import type { Experience } from '../models/Experience';

defineProps({
  experiences: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
  knownTechs: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<style scoped>
/* Animations handled by AOS */
</style>
