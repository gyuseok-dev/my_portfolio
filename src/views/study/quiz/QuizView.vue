<script setup lang="ts">
import Question from "@/components/study/Question.vue"
import QuizHeader from "@/components/study/QuizHeader.vue"
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "@/data/quizes.json"
const route = useRoute();
console.log(route.params.id)
const quizId = parseInt(route.params.id as string);
const quiz = quizes.find((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz!.questions.length}`)

// // IMPORTANT: watch() is a Vue 3 function, not a Vue 2 function
// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value + 1}/${quiz!.questions.length}`
// })
// this is simplified with computed()
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz!.questions.length}`)

</script>
<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" />
        <div>
            <Question :question="quiz!.questions[currentQuestionIndex]" />
        </div>
        <button @click="currentQuestionIndex++">Next Question</button>
    </div>
</template>

<style scoped></style>