<template>
    <div class="container">
        <div class="box" id="box1" ref="box1" @mousedown="startDragging($event)">
            <h3>Click</h3>
        </div>
        <div class="box" ref="box2">
            <h3>Hole</h3>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';

interface Dragging {
    element: HTMLElement | null;
    offset: { x: number; y: number };
}

export default {
    setup() {
        const box1 = ref<HTMLDivElement | null>(null);
        const box2 = ref<HTMLDivElement | null>(null);
        let box1In = false; // box1이 box2 안에 들어왔는지 여부
        let isEnable = false; // 마우스 드래드 가능 여부
        const dragging = reactive<Dragging>({
            element: null,
            offset: { x: 0, y: 0 }
        });
        const position = reactive({
            x: 0,
            y: 0,
        });


        const startDragging = (event: MouseEvent) => {
            if (!box1.value) return;
            isEnable ? disable() : enable();
            dragging.element = box1.value;
            dragging.offset.x = event.clientX - position.x;
            dragging.offset.y = event.clientY - position.y;
            box1.value.style.width = '140px';
            box1.value.style.height = '140px';
        };

        const stopDragging = (event: MouseEvent) => {
            if (!box1.value) return;
            box1.value.style.width = '150px';
            box1.value.style.height = '150px';
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!dragging.element) return;
            if (!box2.value || !box1.value) return;
            if (!isEnable) return;

            let x = event.clientX - dragging.offset.x;
            let y = event.clientY - dragging.offset.y;

            const rect1 = box1.value.getBoundingClientRect()
            const rect2 = box2.value.getBoundingClientRect()

            // box2 안으로 들어올때만 

            const IS_CLOSED = Math.abs(rect2.left - rect1.left) < 30 && Math.abs(rect2.top - rect1.top) < 30;
            if (!box1In && IS_CLOSED) {
                boxIn()
                const mid1 = { x: rect1.left + rect1.width / 2, y: rect1.top + rect1.height / 2 }
                const mid2 = { x: rect2.left + rect2.width / 2, y: rect2.top + rect2.height / 2 }
                x -= mid1.x - mid2.x;
                y -= mid1.y - mid2.y;
            }

            if (box1In && !IS_CLOSED) {
                boxOut()
            }
            dragging.element.style.transform = `translate(${x}px, ${y}px)`;
            position.x = x;
            position.y = y;

        };

        const boxIn = () => {
            if (!box1.value) return;
            if (box1In) return;
            box1In = true;
            box1.value.style.border = '5px solid red';
            disable()

        }
        const boxOut = () => {
            if (!box1.value) return;
            if (!box1In) return;
            box1In = false;
            box1.value.style.border = 'none';
        }
        const disable = () => {
            isEnable = false;
            box1.value?.textContent && (box1.value.textContent = 'Click');
        }
        const enable = () => {
            isEnable = true;
            box1.value?.textContent && (box1.value.textContent = 'Move');
        }

        return {
            box1,
            box2,
            startDragging,
            stopDragging,
            handleMouseMove
        };
    },
    mounted() {
        window.addEventListener('mouseup', this.stopDragging);
        window.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeUnmount() {
        window.removeEventListener('mouseup', this.stopDragging);
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
};
</script>

<style scoped>
.container {
    border: 1px solid red;
    font-size: 18px;
    font-weight: bold;
}

.box {
    border: 1px solid yellow;
    color: black;
    background-color: pink;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 50%;
    z-index: 0;
}


#box1 {
    border: 1px solid blue;
    position: absolute;
    left: -300px;
    width: 150px;
    height: 150px;
    z-index: 1;
    cursor: pointer;
    transition: all 0.1s;
}
</style>