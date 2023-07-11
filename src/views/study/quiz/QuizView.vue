<template>
    <div>
        <header>
            <h4>Question 1/3</h4>
            <div class="bar">
                <div class="completion"></div>
            </div>
        </header>
    </div> 
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
    header {
        margin-top: 20px;
    }
    header h4 {
        font-size: 30px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 1px solid bisque;
    }

    .completion {
        width: 0;
        height: 100%;
        background-color: bisque;
    }

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