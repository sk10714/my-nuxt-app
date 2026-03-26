<template>
  <div>
    <h3>Counter: {{ count }}</h3>
    <button @click="increment">
      Increment
    </button>
    <button @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<style scoped>
button {
  margin: 5px;
  color: white;
  background: #bbb;
  border: none;
  padding: 12px 16px;
  border-radius: 100px;
  cursor: pointer;
}
</style>
