<template>
  <nav
    class="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-primary-500/20 backdrop-blur-md shadow-lg"
    role="navigation"
    aria-label="Navegación principal"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 relative" data-aos="fade-in" data-aos-duration="800">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-accent-orange/30 blur-xl rounded-full"
            aria-hidden="true"
          ></div>
          <span
            class="relative text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent cursor-pointer"
          >
            {{ basics.brandName }}
          </span>
        </div>

        <!-- Links -->
        <div class="hidden lg:flex gap-8">
          <a
            href="#projects"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
          >
            Proyectos
          </a>
          <a
            href="#skills"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
          >
            Habilidades
          </a>
          <a
            href="#experience"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
          >
            Experiencia
          </a>
          <a
            href="#education"
            class="text-gray-300 hover:text-accent-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
          >
            Educación
          </a>
        </div>

        <!-- Right Section: Social Links + Mobile Menu -->
        <div class="flex items-center gap-3">
          <!-- Social Links -->
          <div class="hidden sm:flex gap-3" role="list">
            <SocialLink
              v-for="profile in basics.profiles"
              :key="profile.network"
              :href="profile.url"
              :network="profile.network"
              variant="nav"
              role="listitem"
            />
            <a
              :href="`mailto:${basics.email}`"
              class="p-2 text-gray-400 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
              :aria-label="`Enviar email a ${basics.email}`"
              title="Email"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </a>
          </div>

          <!-- Separator -->
          <div class="hidden sm:block lg:hidden w-px h-6 bg-gray-600"></div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="lg:hidden p-2 text-gray-400 hover:text-accent-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
            :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
          >
            <svg
              class="w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-90': menuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="fixed top-16 left-0 right-0 z-40 lg:hidden bg-gradient-to-b from-gray-800 to-gray-900 border-b border-primary-500/20 shadow-lg"
        role="navigation"
      >
        <div class="px-4 py-4 space-y-2">
          <a
            href="#projects"
            @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Proyectos
          </a>
          <a
            href="#skills"
            @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Habilidades
          </a>
          <a
            href="#experience"
            @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Experiencia
          </a>
          <a
            href="#education"
            @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Educación
          </a>

          <!-- Social Links (XS only) -->
          <div class="sm:hidden pt-4 border-t border-gray-700 mt-4">
            <div class="flex gap-3" role="list">
              <SocialLink
                v-for="profile in basics.profiles"
                :key="profile.network"
                :href="profile.url"
                :network="profile.network"
                variant="nav"
                role="listitem"
              />
              <a
                :href="`mailto:${basics.email}`"
                class="p-2 text-gray-400 hover:text-accent-orange hover:bg-accent-orange/10 rounded-lg transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-900"
                :aria-label="`Enviar email a ${basics.email}`"
                title="Email"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';
import { getSocialNavClass } from '../utils/social';
import SocialLink from './SocialLink.vue';
import type { Basics } from '../models/Basics';

const props = defineProps({
  basics: {
    type: Object as PropType<Basics>,
    required: true,
  },
});

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
/* Logo styles removed */
</style>
