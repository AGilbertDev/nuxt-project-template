<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({ title: () => t('app.title'), description: () => t('app.tagline') })
</script>

<template>
  <UApp>
    <a class="sr-only focus:not-sr-only" href="#main-content">Aller au contenu</a>
    <UMain id="main-content" tabindex="-1">
      <NuxtPage />
    </UMain>
  </UApp>
</template>
