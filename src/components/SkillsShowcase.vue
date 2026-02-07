<template>
  <section
    id="skills"
    class="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div class="absolute top-40 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-20 left-20 w-72 h-72 bg-accent-orange rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <SectionHeader label="Habilidades" title="Competencias" highlight="Técnicas" />

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <Card
          v-for="(skillGroup, index) in skills"
          :key="index"
          :data-aos-delay="index * 50"
          border-color="primary"
        >
          <!-- Category Name -->
          <h3
            class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent mb-6"
          >
            {{ skillGroup.name }}
          </h3>

          <!-- Skills Tags -->
          <div class="flex flex-wrap gap-2" role="list">
            <span
              v-for="keyword in skillGroup.keywords.slice(0, 6)"
              :key="keyword"
              role="listitem"
              class="px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold border border-primary-200 hover:border-primary-400 hover:bg-primary-100 transition-all duration-200"
              :aria-label="`Habilidad: ${keyword}`"
            >
              {{ keyword }}
            </span>
            <span
              v-if="skillGroup.keywords.length > 6"
              role="status"
              class="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold border border-gray-300"
              :aria-label="`${skillGroup.keywords.length - 6} habilidades adicionales en ${skillGroup.name}`"
            >
              +{{ skillGroup.keywords.length - 6 }}
            </span>
          </div>
        </Card>
      </div>

      <!-- Expertise Section Title -->
      <div data-aos="fade-up" data-aos-delay="150">
        <h3 class="text-3xl font-bold text-gray-900 mb-8">
          <span class="sr-only">Experiencia profesional</span>
          <span aria-hidden="true">🎯</span>
          <span
            class="bg-gradient-to-r from-primary-600 to-accent-orange bg-clip-text text-transparent"
          >
            Indicadores clave
          </span>
        </h3>
      </div>

      <!-- Expertise Highlights -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
        <!-- Card 1 -->
        <Card border-color="primary" data-aos-delay="300" :custom-classes="['text-center']">
          <div class="flex items-center justify-center gap-2 mb-2">
            <IconCalendar class="w-8 h-8 text-primary-600 flex-shrink-0" />
            <div
              class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
              aria-label="Años de experiencia"
            >
              {{ new Date().getFullYear() - expertise.startOfExperience }}+
            </div>
          </div>
          <p class="text-gray-700 font-medium text-sm">Años de experiencia</p>
        </Card>

        <!-- Card 2 -->
        <Card border-color="orange" data-aos-delay="350" :custom-classes="['text-center']">
          <div class="flex items-center justify-center gap-2 mb-2">
            <IconBadgeCheck class="w-8 h-8 text-accent-orange flex-shrink-0" />
            <div
              class="text-3xl font-bold bg-gradient-to-r from-accent-orange to-accent-orange/70 bg-clip-text text-transparent"
              aria-label="Tecnologías dominadas"
            >
              {{ expertise.technologiesMastered }}+
            </div>
          </div>
          <p class="text-gray-700 font-medium text-sm">Tecnologías dominadas</p>
        </Card>

        <!-- Card 3 -->
        <Card border-color="green" data-aos-delay="400" :custom-classes="['text-center']">
          <div class="flex items-center justify-center gap-2 mb-2">
            <IconClipboardCheck class="w-8 h-8 text-accent-green flex-shrink-0" />
            <div
              class="text-3xl font-bold bg-gradient-to-r from-accent-green to-accent-green/70 bg-clip-text text-transparent"
              aria-label="Proyectos realizados"
            >
              {{ expertise.projectsCompleted }}+
            </div>
          </div>
          <p class="text-gray-700 font-medium text-sm">Proyectos realizados</p>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import SectionHeader from './SectionHeader.vue';
import Card from './Card.vue';
import IconCalendar from './icons/IconCalendar.vue';
import IconBadgeCheck from './icons/IconBadgeCheck.vue';
import IconClipboardCheck from './icons/IconClipboardCheck.vue';
import type { Skill, Expertise } from '../models/Skill';

defineProps({
  skills: {
    type: Array as PropType<Skill[]>,
    required: true,
  },
  expertise: {
    type: Object as PropType<Expertise>,
    required: true,
  },
});
</script>

<style scoped>
/* Animations handled by AOS */
</style>
