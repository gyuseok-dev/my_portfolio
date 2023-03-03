<template>
  <canvas ref="canvasRef" width="400" height="400"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.stroke();
    };

    onMounted(() => {
      const canvas = canvasRef.value;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 50;

      drawCircle(ctx, centerX, centerY, radius);
    });

    return {
      canvasRef,
    };
  },
});
</script>

<style>
canvas {
  display: flex;
  background-color: white;
}
</style>