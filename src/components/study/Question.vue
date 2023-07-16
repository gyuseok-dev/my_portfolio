<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const { question } = defineProps({
    question: Object
})
const emit = defineEmits(['selectOption'])
const emitSelectedOption = (isCorrect: boolean) => {
    emit("selectOption", isCorrect)
}
</script>
<template>
    <div class="question-container">
        <h1 class="question">
            {{ question!.text }}
        </h1>
    </div>
    <div class="options-container">
        <div v-for="option in question!.options" :key="option.id" class="option" @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 2%0px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    /* align-items: center; */
    margin-bottom: 20px;
}

.option-label {
    color: black;
    background-color: bisque;
    width: 60px;
    height: 60px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.option-value {
    color: black;
    background-color: rgba(255, 228, 196, 0.388);
    font-size: 30px;
    width: 100%;
    padding: 0, 20px;
}
</style>