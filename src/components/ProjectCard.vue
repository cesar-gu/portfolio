<template>
  <article
    class="group relative h-full bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 hover:border-primary-300 transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
    :data-aos="aos"
    :data-aos-delay="delay"
    :aria-label="`Proyecto ${project.name}`"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-orange/0 group-hover:from-primary-50 group-hover:to-accent-orange/5 transition-all duration-300 rounded-2xl pointer-events-none"
    />

    <div class="relative p-6 pb-0">
      <div class="flex items-center justify-between gap-4 mb-2">
        <h3
          class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent"
        >
          {{ project.name }}
        </h3>
        <span
          :class="[
            'inline-block px-3 py-1 text-xs font-semibold rounded-full transition-colors border flex-shrink-0',
            project.status === 'active'
              ? 'bg-green-100 text-green-800 border-green-200'
              : 'bg-gray-100 text-gray-700 border-gray-200',
          ]"
          :aria-label="`Estado: ${project.status === 'active' ? 'Activo' : 'Inactivo'}`"
        >
          {{ project.status === 'active' ? 'Activo' : 'Inactivo' }}
        </span>
      </div>

      <div class="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <time :datetime="project.startDate">
          {{ formatDate(project.startDate) }}
        </time>
        <span>→</span>
        <time v-if="project.endDate" :datetime="project.endDate">
          {{ formatDate(project.endDate) }}
        </time>
        <span v-else class="italic">Presente</span>
      </div>

      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <p v-if="project.role" class="text-md font-medium text-gray-700 mb-2">
            📌 {{ project.role }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative px-6 py-2 flex-1 flex flex-col">
      <p class="text-gray-700 mb-4">
        {{ project.shortDescription }}
      </p>

      <ul
        v-if="project.highlights && project.highlights.length > 0"
        class="space-y-2 mb-6"
        role="list"
        :aria-label="`Características destacadas de ${project.name}`"
      >
        <li
          v-for="(highlight, idx) in project.highlights.slice(0, 2)"
          :key="idx"
          class="flex items-start text-gray-600 text-sm flex gap-2"
          role="listitem"
        >
          <span class="text-blue-600 font-bold flex-shrink-0">✓</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <div class="mb-6" role="region" :aria-label="`Tecnologías de ${project.name}`">
        <p class="text-sm font-semibold text-gray-600 mb-3">Tecnologías:</p>
        <div class="flex flex-wrap gap-2" role="list">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold border border-primary-200 hover:border-primary-400 hover:bg-primary-100 transition-all duration-200"
            role="listitem"
            :aria-label="`Tecnología: ${tech}`"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Team Info -->
      <p v-if="project.team" class="text-sm text-gray-600 mb-4">👥 Equipo: {{ project.team }}</p>
    </div>

    <div class="relative px-6 py-4 bg-gray-50 border-t border-gray-200 flex gap-3 flex-wrap">
      <a
        v-if="project.repository"
        :href="project.repository"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 border border-gray-300 hover:border-gray-400 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        :aria-label="`Ver código de ${project.name} en repositorio`"
      >
        <IconGithub />
        <span>Code</span>
      </a>
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 hover:border-primary-400 text-primary-700 hover:text-primary-900 rounded-lg font-semibold transition-all duration-300 hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        :aria-label="`Ver demo de ${project.name}`"
      >
        <IconExternalLink />
        <span>Demo</span>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue';
import IconExternalLink from './icons/IconExternalLink.vue';
import type { Project } from '../models/Project';
import { formatDate } from '../utils/date';

interface Props {
  project: Project;
  delay?: number;
  aos?: string;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  aos: 'fade-up',
});
</script>

<style scoped>
/* Optimizado para prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  :deep(*) {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
