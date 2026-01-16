<template>
  <nav
    class="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-primary-500/20 backdrop-blur-md shadow-lg"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 relative" data-aos="fade-in" data-aos-duration="800">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-accent-orange/30 blur-xl rounded-full"
          ></div>
          <span
            class="relative text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent cursor-pointer"
          >
            {{ basics.brandName }}
          </span>
        </div>

        <!-- Links -->
        <div class="hidden md:flex gap-8">
          <a
            href="#skills"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium"
          >
            Habilidades
          </a>
          <a
            href="#experience"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium"
          >
            Experiencia
          </a>
          <a
            href="#education"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium"
          >
            Educación
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex gap-3">
          <SocialLink
            v-for="profile in basics.profiles"
            :key="profile.network"
            :href="profile.url"
            :network="profile.network"
            variant="nav"
          />
          <a
            :href="`mailto:${basics.email}`"
            class="p-2 text-gray-400 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-all transform hover:scale-110"
            title="Email"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { getSocialNavClass } from '../utils/social';
import SocialLink from './SocialLink.vue';
import type { Basics } from '../models/Basics';

const props = defineProps({
  basics: {
    type: Object as PropType<Basics>,
    required: true,
  },
});
</script>

<style scoped>
/* Logo styles removed */
</style>
