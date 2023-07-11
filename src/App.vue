<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Nav from "./components/study/Nav.vue"

const randomState = ref("")
</script>

<template>
  {{ randomState }}
  <button @click="randomState = 'hello there'">Clieck me</button>
  <Nav />
  <RouterView />
</template>