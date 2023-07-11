
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import cars from '@/data/cars.json';
    const route = useRoute();
    const router = useRouter();
    const carId = Number(route.params.id);
    const car = cars.find(car => car.id === carId);

    const showContact = () => {
        if (carId === 4) {
            alert('This car is not for sale');
            return;
        }   
        router.push(`${carId}/contact`);
    }
</script>
<template>
    <div v-if="car">
        <h1> Car View </h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="showContact">Click for contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>