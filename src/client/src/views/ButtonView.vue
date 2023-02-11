<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
const increment = () => {
  count.value++
}
</script>


<template>
  <div id="app">
    <button @click="increment">count is: {{ count }}</button>
  </div>
</template>
