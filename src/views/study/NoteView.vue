<!-- TODO: typescript로 변경하기 -->
<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const newNote = ref('')
const notes = ref([])
const errorMessages = ref("")
function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)"
}

// showModal.value = true 일때 foucs note
const addNote = () => {
    if (newNote.value.trim().length < 10) {
        return errorMessages.value = "내용을 입력해주세요(10자 이상)."
    }
    notes.value.push({
        id: Math.floor(Math.random() * 1000000),
        text: newNote.value,
        date: new Date().toISOString().slice(0, 10),
        backgroundColor: getRandomColor()
    })
    showModal.value = false
    newNote.value = ''
    errorMessages.value = ''
}

</script>

<template>
    <main>
        <div v-if="showModal" class="overlay">
            <div class="modal">
                <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
                <p v-if="errorMessages" :style="{color: 'red'}">{{ errorMessages }}</p>
                <button @click="addNote()">저장</button>
                <button class="close" @click="showModal = false">닫기</button>
            </div>
        </div>
        <div class="container">
            <header>
                <h1>Notes</h1>
                <button @click="showModal = true">+</button>
            </header>
            <div class="cards-container">
                <div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.backgroundColor }">
                    <p class="main-text">{{ note.text }}</p>
                    <p class="date">{{ note.date }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
}

.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 75px;
    margin-bottom: 25px;
    font-style: bold;
    color: white;
}

header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 100%;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    color: black;
    width: 225px;
    height: 225px;
    padding: 10px;
    background-color: rgb(237, 182, 44);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
}

.date {
    font-size: 12.5px;
    font-style: bold;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal button {
    padding: 10px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;

}

.modal .close {
    background-color: red;
    margin-top: 7px;
}
</style>
<script lang="ts">
</script>