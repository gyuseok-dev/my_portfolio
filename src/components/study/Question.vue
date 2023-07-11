<template>
    <div class="question-container">
        <h1 class="question">
            What is the chemical value of table salt?
        </h1>
    </div>
    <div class="options-container">
        <div class="option">
            <p class="option-label">A</p>
            <div class="option-value">
                <p>NaCl</p>
            </div>
        </div>
        <div class="option">
            <p class="option-label">B</p>
            <div class="option-value">
                <p>NaCl</p>
            </div>
        </div>
        <div class="option">
            <p class="option-label">C</p>
            <div class="option-value">
                <p>NaCl</p>
            </div>
        </div>
        <div class="option">
            <p class="option-label">D</p>
            <div class="option-value">
                <p>NaCl</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question-container {
        margin-top: 2%0px;
    }

    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        /* align-items: center; */
        margin-bottom: 20px;
    }

    .option-label {
        color: black;
        background-color: bisque;
        width: 60px;
        height: 60px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .option-value {
        color: black;
        background-color: rgba(255, 228, 196, 0.388);
        font-size: 30px;
        width: 100%;
        padding: 0, 20px;
    }
</style>