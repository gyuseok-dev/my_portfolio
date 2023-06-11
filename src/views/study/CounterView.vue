<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>

<template>
    <main>
        <div>
            <h4>
                The current count is...
            </h4>
            <h1>{{ count }}</h1>
            <button @click="count--">-</button>
            <button @click="count++">+</button>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-border);
    text-align: center;
}
div {
    border: 1px solid var(--color-border);
}
</style>