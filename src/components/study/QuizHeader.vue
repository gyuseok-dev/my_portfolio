<template>
    <header>
        <h4>Question 1/3</h4>
        <div class="bar">
            <div class="completion"></div>
        </div>
    </header>
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
</style>