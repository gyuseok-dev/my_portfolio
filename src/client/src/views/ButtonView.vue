<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
const increment = () => {
  count.value++
}

const items = [{ message: 'Foo' }, { message: 'Bar' }]
</script>


<template>
  <div id="app">
    <button @click="increment">count is: {{ count }}</button>
  </div>
  <div>
    <ul>
    <li v-for="item in items">{{ item.message }}</li>
    </ul>
  </div>
  <div id="circle">
        <v-stage ref="stage">
      <v-layer>
      <v-circle :config="{
          x: 200,
          y: 100,
          radius: 50,
          fill: 'green'
        }"
      />
      </v-layer>
      <v-layer ref="dragLayer"></v-layer>
    </v-stage>
  </div>
</template>
