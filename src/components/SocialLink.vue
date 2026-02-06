<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="socialClass"
    :aria-label="`Visitar perfil de ${network}`"
    :title="`Perfil ${network}`"
  >
    <IconLinkedin v-if="network === 'LinkedIn'" />
    <IconGithub v-else-if="network === 'GitHub'" />
    <IconGitlab v-else-if="network === 'GitLab'" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getSocialNavClass, getSocialFooterClass } from '../utils/social';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconGithub from './icons/IconGithub.vue';
import IconGitlab from './icons/IconGitlab.vue';
import type { SocialLinkProps } from '../models/ComponentProps';

const props = withDefaults(defineProps<SocialLinkProps>(), {
  variant: 'nav',
});

const socialClass = computed(() => {
  if (props.variant === 'footer') {
    return getSocialFooterClass(props.network);
  }
  return getSocialNavClass(props.network);
});
</script>

<style scoped>
/* SVG transitions handled by Tailwind */
</style>
