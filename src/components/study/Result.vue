<script setup lang="ts">
import { defineProps } from "vue";

const { quizQuestionLength, numberOfCorrectAnswers } = defineProps({
    quizQuestionLength: Number,
    numberOfCorrectAnswers: Number
})


</script>
<template>
    <div class="results">
        <p>Your Result...</p>
        <h1>
            {{numberOfCorrectAnswers}}/{{quizQuestionLength}}
        </h1>
        <RouterLink to="/study/quiz" class="button">Go Back</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
</style>
