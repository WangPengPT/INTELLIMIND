<script setup lang="ts">
const t = useContent()
const lang = useLang()
useHead(() => ({
  htmlAttrs: { lang: LANGS.find((l) => l.code === lang.value)?.html ?? 'en' },
  title: t.value.meta.title,
  meta: [
    { name: 'description', content: t.value.meta.description },
    { property: 'og:title', content: t.value.meta.title },
    { property: 'og:description', content: t.value.meta.description }
  ]
}))
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
