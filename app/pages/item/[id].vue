<template>
    <div>
        <h1>商品</h1>
        <hr>
        <div v-if="route.params.id">
            商品ID: {{ route.params.id }}
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

definePageMeta({
    validate: (route) => {
        return /^\d+$/.test(route.params.id)
    }
})
</script>