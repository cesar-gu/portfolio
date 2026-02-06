<template>
  <section
    id="projects"
    class="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    aria-labelledby="projects-heading"
    role="region"
  >
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div class="absolute top-40 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
      <div class="absolute bottom-40 left-20 w-72 h-72 bg-accent-orange rounded-full blur-3xl" />
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader
        label="Mis Proyectos"
        title="Proyectos"
        highlight="Destacados"
        description="Algunos de los proyectos personales que he desarrollado, demostrando mis habilidades y pasión por la innovación tecnológica"
      />

      <div
        :class="{ 'px-7 sm:px-16': showControls }"
        class="relative mt-12"
        role="list"
        aria-label="Lista de proyectos personales"
      >
        <div :class="{ 'overflow-hidden fixed-shadow': showControls }">
          <div
            class="flex items-stretch will-change-transform transition-transform duration-500"
            :style="trackStyle"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
          >
            <div
              v-for="(project, idx) in projects"
              :key="project.id"
              role="listitem"
              :data-aos="'fade-up'"
              :data-aos-delay="idx * 50"
              class="flex-shrink-0 px-2 py-1 w-full lg:w-1/2 xl:w-1/3"
            >
              <div class="h-full">
                <ProjectCard :project="project" :delay="idx * 50" />
              </div>
            </div>
          </div>
        </div>

        <button
          v-if="showControls"
          class="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:ml-2 z-20 bg-white/90 hover:bg-white border border-gray-300 hover:border-primary-500 inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
          aria-label="Anterior proyectos"
          @click="prev"
        >
          <IconArrowLeft class="text-gray-700 hover:text-primary-500 transition-colors" />
        </button>

        <button
          v-if="showControls"
          class="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:mr-2 z-20 bg-white/90 hover:bg-white border border-gray-300 hover:border-primary-500 inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
          aria-label="Siguiente proyectos"
          @click="next"
        >
          <IconArrowRight class="text-gray-700 hover:text-primary-500 transition-colors" />
        </button>

        <div v-if="showControls && pages > 1" class="mt-6 flex items-center justify-center gap-3">
          <button
            v-for="p in pages"
            :key="p"
            :aria-label="`Ir a la página ${p}`"
            :class="
              'w-3 h-3 rounded-full transition-colors ' +
              (p - 1 === activePage ? 'bg-primary-600' : 'bg-gray-300')
            "
            @click="goToPage(p - 1)"
          />
        </div>
      </div>

      <div v-if="projects.length === 0" class="text-center py-12" role="status" aria-live="polite">
        <p class="text-gray-600">No hay proyectos personales disponibles en este momento.</p>
      </div>

      <div class="mt-12 text-center" data-aos="fade-up" data-aos-delay="150">
        <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
          ¿Interesado en colaborar o conocer más sobre estos proyectos?
        </p>
        <a
          :href="emailLink"
          class="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          :aria-label="`Enviar correo a ${props.basics.email} para conocer más sobre los proyectos personales`"
        >
          Ponerse en contacto
          <IconArrowRight />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import type { Project } from '../models/Project';
import type { Basics } from '../models/Basics';
import { useProjectCarousel } from '../composables/useProjectCarousel';
import ProjectCard from './ProjectCard.vue';
import SectionHeader from './SectionHeader.vue';

interface Props {
  projects: Project[];
  basics: Basics;
}

const props = defineProps<Props>();

const projects = computed(() => {
  const featured = props.projects.filter((p) => p.featured);
  const others = props.projects.filter((p) => !p.featured);
  return [...featured, ...others];
});

const emailLink = computed(() => `mailto:${props.basics.email}`);

const total = projects.value.length;

const {
  showControls,
  pages,
  activePage,
  trackStyle,
  next,
  prev,
  goToPage,
  onTouchStart,
  onTouchEnd,
} = useProjectCarousel({
  total,
  initialItemsPerView: 3,
});
</script>

<style scoped>
/* Soporte para prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  :deep(*) {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.fixed-shadow {
  padding-block: 50px;
  margin-block: -50px;
  padding-inline: 4px;
  margin-inline: -4px;
}
</style>
