<template>
  <footer
    class="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-gray-300 py-16 relative overflow-hidden border-t border-gray-800"
    role="contentinfo"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div class="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-20 left-20 w-72 h-72 bg-accent-orange rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:items-center">
        <!-- About Section -->
        <a
          href="#main-content"
          class="group"
          data-aos="fade-up"
          data-aos-delay="0"
          :aria-label="`Ir a ${basics.brandName}`"
        >
          <div class="flex items-center gap-3 mb-4">
            <img src="/portfolio/favicon.svg" alt="Logo" class="w-10 h-10" />
            <span
              class="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent"
            >
              {{ basics.brandName }}
            </span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ summaryShort }}
          </p>
        </a>

        <!-- Social Links -->
        <div data-aos="fade-up" data-aos-delay="100" class="md:text-right">
          <h3 class="text-lg font-bold mb-6">Conecta conmigo</h3>
          <div class="flex gap-4 md:justify-end" role="list">
            <SocialLink
              v-for="profile in basics.profiles"
              :key="profile.network"
              :href="profile.url"
              :network="profile.network"
              variant="footer"
              role="listitem"
            />
            <a
              :href="`mailto:${basics.email}`"
              :aria-label="`Enviar email a ${basics.email}`"
              class="group relative w-10 h-10 bg-gray-800 hover:bg-accent-orange rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/50 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              :title="`Email: ${basics.email}`"
            >
              <IconEmail />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8 pb-8" data-aos="fade-up" data-aos-delay="150">
        <p class="text-gray-500 text-sm text-center">
          Diseñado con
          <span class="text-accent-orange" aria-label="corazón">❤</span>
          usando Astro + Vue + Tailwind
        </p>
      </div>

      <!-- Copyright -->
      <div
        class="border-t border-gray-800 py-8 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p class="text-gray-600 text-sm">
          © {{ new Date().getFullYear() }} {{ basics.name }}. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import SocialLink from './SocialLink.vue';
import IconEmail from './icons/IconEmail.vue';
import type { Basics } from '../models/Basics';
import type { Expertise } from '../models/Skill';
import { interpolateYears } from '../utils/interpolation';

const props = defineProps({
  basics: {
    type: Object as PropType<Basics>,
    required: true,
  },
  expertise: {
    type: Object as PropType<Expertise>,
    required: true,
  },
});

const summaryShort = computed(() => {
  return interpolateYears(props.basics.summaryShort, props.expertise.startOfExperience);
});
</script>

<style scoped>
/* Footer styles */
</style>
