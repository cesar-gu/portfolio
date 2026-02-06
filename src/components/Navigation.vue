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
              <IconEmail />
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
            <IconMenu :is-open="menuOpen" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
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
                <IconEmail />
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
import SocialLink from './SocialLink.vue';
import IconEmail from './icons/IconEmail.vue';
import IconMenu from './icons/IconMenu.vue';
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
