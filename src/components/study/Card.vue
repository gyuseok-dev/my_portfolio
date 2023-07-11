<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import {defineProps} from "vue"
    const router = useRouter(); 
    const {quiz} = defineProps(['quiz'])
    const navigateToQuiz = () => {
        router.push(`/study/quiz/${quiz.id}`);
    }
</script>

<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;

}

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text h2 {
    font-weight: bold;
}
</style>