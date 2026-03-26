<template>
    <div>
        <h1>標籤頁面</h1>
        <hr>
        <div>標籤: {{ route.params.tag }}</div>
    </div>
</template>

<script setup>
const route = useRoute()
</script>