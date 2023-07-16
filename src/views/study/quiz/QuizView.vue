<script setup lang="ts">
import Question from "@/components/study/Question.vue"
import QuizHeader from "@/components/study/QuizHeader.vue"
import Result from "@/components/study/Result.vue"
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "@/data/quizes.json"
const route = useRoute();
const quizId = parseInt(route.params.id as string);
const quiz = quizes.find((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0)
const showResults = ref(false)
// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz!.questions.length}`)

// // IMPORTANT: watch() is a Vue 3 function, not a Vue 2 function
// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value + 1}/${quiz!.questions.length}`
// })
// this is simplified with computed()
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz!.questions.length}`)
const barPercentage = computed(() => `${(currentQuestionIndex.value) / quiz!.questions.length * 100}%`)
const numberOfCorrectAnswers = ref(0)
const onOptionSelected = (isCorrect: boolean) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++
    }

    if (currentQuestionIndex.value === quiz!.questions.length - 1) {
        showResults.value = true
    }
    currentQuestionIndex.value++

}
</script>
<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Question v-if="!showResults" :question="quiz!.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected" />
            <Result 
                v-else
                :quizQuestionLength="quiz!.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
    </div>
</template>

<style scoped></style>