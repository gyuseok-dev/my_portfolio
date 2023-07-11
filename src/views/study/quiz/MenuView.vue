<script setup lang="ts">
import q from "@/data/quizes.json"
import { ref, watch } from "vue"
import Card from "@/components/study/Card.vue"
const quizes = ref(q)
const search = ref("")
watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
    <div>
        <header>
            <h1>Quizes</h1>
            <input v-model="search" type="text" placeholder="Search...">
        </header>
        <div class="options-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
        </div>
    </div>
</template>

<style scoped>

header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    color: white;
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

/* CARD */

</style>