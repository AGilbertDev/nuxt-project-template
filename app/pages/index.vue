<script setup lang="ts">
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()

const other = computed(() => (locale.value === 'fr' ? 'en' : 'fr'))
</script>

<template>
  <UContainer class="flex min-h-dvh flex-col items-center justify-center gap-6 text-center">
    <h1 class="text-[clamp(2rem,1.5rem+2vw,3.5rem)] font-extrabold tracking-tight text-highlighted">
      {{ t('app.title') }}
    </h1>
    <p class="max-w-prose text-muted">{{ t('app.tagline') }}</p>
    <UButton color="neutral" :to="switchLocalePath(other)" variant="outline">
      {{ t('nav.toggleLocale') }}
    </UButton>
  </UContainer>
</template>
