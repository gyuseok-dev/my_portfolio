<script setup lang="ts">
    import cars from '@/data/cars.json';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        Home View
        <div class="cars">
            <RouterLink :to="`study/router/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
                {{ car.name  }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .cars {
        display: flex;
    }
    .cars a {
        text-decoration: none;
        color: black;
        width: 100%;
        box-shadow: 1px 1px 10px rgba(227, 219, 219, 0.981);
        margin: 10px;
        background-color: rgb(190, 186, 186);
    }
</style>