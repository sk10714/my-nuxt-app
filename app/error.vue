<template>
  <div class="error-page">
    <div class="error-content">
      <h1>404</h1>
      <p>找不到這個頁面 😢</p>
      <p class="sub">你輸入的網址不存在，請確認網址是否正確。</p>
      <NuxtLink to="/" class="btn">回到首頁</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff8f0;
}

.error-content {
  text-align: center;
  padding: 32px;
}

h1 {
  font-size: 120px;
  font-weight: bold;
  color: #e8763a;
  line-height: 1;
  margin-bottom: 16px;
}

p {
  font-size: 24px;
  color: #b5541a;
  margin-bottom: 8px;
}

.sub {
  font-size: 16px;
  color: #aaa;
  margin-bottom: 32px;
}

.btn {
  background-color: #e8763a;
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.btn:hover {
  background-color: #c45e27;
}
</style>
