<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, async () => {
  try {
    return await queryCollection('content').path(route.path).first()
  } catch (err) {
    return null
  }
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <h1>標題</h1>
</template>