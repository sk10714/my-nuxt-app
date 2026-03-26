<template>
  <div class="main-container">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
}
</style>
