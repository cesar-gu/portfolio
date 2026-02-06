<template>
  <section
    id="education"
    class="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div class="absolute top-40 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-40 left-20 w-72 h-72 bg-accent-orange rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Section Header -->
      <SectionHeader label="Aprendizaje" title="Formación" highlight="Académica" />

      <!-- Education Timeline -->
      <div class="space-y-6 mb-20" role="list">
        <Card
          v-for="(edu, index) in education"
          :key="`${edu.studyType}-${edu.startDate}`"
          :data-aos-delay="index * 50"
          border-color="primary"
          padding="p-8"
          role="listitem"
        >
          <!-- Header: Degree Type and Dates -->
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3
                  class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent"
                >
                  {{ edu.studyType }}
                </h3>
                <p
                  v-if="edu.score"
                  role="status"
                  class="text-sm font-bold text-accent-green px-3 py-1 bg-accent-green/10 rounded-full inline-block"
                  :aria-label="`Calificación: ${edu.score}`"
                >
                  ⭐ {{ edu.score }}
                </p>
              </div>
              <p class="text-lg font-semibold text-gray-700 mt-1">{{ edu.institution }}</p>
            </div>
            <div class="text-left md:text-right">
              <p class="text-sm font-semibold text-gray-600 whitespace-nowrap">
                <span :aria-label="`Inicio: ${edu.startDate}`">{{ edu.startDate }}</span>
                -
                <span :aria-label="`Fin: ${edu.endDate}`">{{ edu.endDate }}</span>
              </p>
            </div>
          </div>

          <!-- Area/Specialization -->
          <p class="text-gray-700 leading-relaxed mb-4">
            <span class="font-semibold">Especialidad:</span> {{ edu.area }}
          </p>

          <!-- Download Link -->
          <a
            v-if="edu.fileUrl"
            :href="edu.fileUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Descargar proyecto final de ${edu.studyType} en ${edu.institution}`"
            class="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 hover:border-primary-400 text-primary-700 hover:text-primary-900 rounded-lg font-semibold transition-all duration-300 hover:shadow-md text-sm group focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <IconDocument />
            Proyecto Final
          </a>
        </Card>
      </div>

      <!-- Additional Training -->
      <div data-aos="fade-up" data-aos-delay="150">
        <h3 class="text-3xl font-bold text-gray-900 mb-8">
          <span class="sr-only">Formación adicional</span>
          <span aria-hidden="true">📚</span>
          <span
            class="bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent"
          >
            Formación Adicional
          </span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
          <!-- Training Card -->
          <Card
            v-for="(training, idx) in trainings"
            :key="idx"
            :data-aos-delay="200 + idx * 30"
            border-color="primary"
            padding="p-6"
            role="listitem"
          >
            <div class="flex gap-3">
              <IconCheckmark class="text-primary-600 flex-shrink-0 mt-0.5" />
              <span
                class="text-gray-700 font-medium group-hover:text-primary-700 transition-colors"
                >{{ training }}</span
              >
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import IconDocument from './icons/IconDocument.vue';
import IconCheckmark from './icons/IconCheckmark.vue';
import SectionHeader from './SectionHeader.vue';
import Card from './Card.vue';
import type { Education } from '../models/Education';

defineProps({
  education: {
    type: Array as PropType<Education[]>,
    required: true,
  },
  trainings: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<style scoped>
/* Animations handled by AOS */
</style>
