<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-primary-900 px-4 py-20 relative overflow-hidden"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-20 left-20 w-72 h-72 bg-accent-orange rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <!-- Main Title - Professional Role -->
      <div data-aos="zoom-in" data-aos-delay="100">
        <h2
          class="text-base md:text-lg uppercase tracking-widest text-accent-orange font-bold mb-6"
        >
          {{ basics.career }}
        </h2>
      </div>

      <h1
        class="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ firstWord }}
        <span
          class="bg-gradient-to-r from-primary-400 via-accent-orange to-primary-600 bg-clip-text text-transparent"
        >
          {{ remainingWords }}
        </span>
      </h1>

      <!-- Profile Image -->
      <div class="inline-block" data-aos="zoom-in" data-aos-delay="700">
        <div class="relative">
          <img
            :src="basics.image"
            :alt="`Foto de perfil de ${basics.name}, ${basics.specialization}`"
            class="relative h-72 w-60 md:h-96 md:w-80 rounded-full shadow-2xl object-cover animate-morph-pulse"
          />
        </div>
      </div>

      <!-- Subtitle with name -->
      <p
        class="text-2xl md:text-3xl text-gray-200 mb-8 mt-4 font-light"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {{ basics.name }}
      </p>

      <!-- Intro Text -->
      <p
        class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {{ summary }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="400">
        <span
          v-for="tech in basics.featuredTechs"
          :key="tech"
          class="px-4 py-2 bg-accent-orange/20 border border-accent-orange/50 text-accent-orange rounded-full text-sm md:text-base font-semibold"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
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

const firstWord = computed(() => {
  const words = props.basics.specialization.split(' ');
  return words[0];
});

const remainingWords = computed(() => {
  const words = props.basics.specialization.split(' ');
  return words.slice(1).join(' ');
});

const summary = computed(() => {
  return interpolateYears(props.basics.summary, props.expertise.startOfExperience);
});
</script>

<style scoped>
section {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h1 {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes profilePulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

:global(.animate-profilePulse) {
  animation: profilePulse 4s ease-in-out infinite;
}
</style>
