<template>
  <section
    id="education"
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
      <SectionHeader label="Aprendizaje" title="Formación" highlight="Académica" />

      <!-- Education Timeline -->
      <div class="space-y-6 mb-20">
        <Card
          v-for="(edu, index) in education"
          :key="`${edu.studyType}-${edu.startDate}`"
          :data-aos-delay="index * 50"
          border-color="primary"
          padding="p-8"
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
                  class="text-sm font-bold text-accent-green px-3 py-1 bg-accent-green/10 rounded-full inline-block"
                >
                  ⭐ {{ edu.score }}
                </p>
              </div>
              <p class="text-lg font-semibold text-gray-700 mt-1">{{ edu.institution }}</p>
            </div>
            <div class="text-left md:text-right">
              <p class="text-sm font-semibold text-gray-600 whitespace-nowrap">
                {{ edu.startDate }} - {{ edu.endDate }}
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
            class="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 hover:border-primary-400 text-primary-700 hover:text-primary-900 rounded-lg font-semibold transition-all duration-300 hover:shadow-md text-sm group"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Proyecto Final
          </a>
        </Card>
      </div>

      <!-- Additional Training -->
      <div data-aos="fade-up" data-aos-delay="150">
        <h3 class="text-3xl font-bold text-gray-900 mb-8">
          📚
          <span
            class="bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent"
          >
            Formación Adicional
          </span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Training Card -->
          <Card
            v-for="(training, idx) in trainings"
            :key="idx"
            :data-aos-delay="200 + idx * 30"
            border-color="primary"
            padding="p-6"
          >
            <div class="flex gap-3">
              <svg
                class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
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
