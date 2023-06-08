<template>
  <div>{{ username }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // 마커 깔고 빠른 랜더링 보여주기
  setup() {
    const username = "test"
    return { username }
  },
})

</script>