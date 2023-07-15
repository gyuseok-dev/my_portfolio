<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <RouterLink active-class='active' to="/">Home</RouterLink>
        <RouterLink active-class='active' to="/study/router/about">About</RouterLink>
    </div>
</template>

<style scoped> 
    .active { /* active class for router-link */
        font-weight: 900;
        color: rgb(200, 135, 14);
    }
</style>