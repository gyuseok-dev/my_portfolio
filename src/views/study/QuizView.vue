<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input type="text" placeholder="Search...">
        </header>
        <div class="options-container">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4NDcwMjY2fA&ixlib=rb-4.0.3&dpr=2&auto=format&fit=crop&w=120&h=200&q=60" alt="">
                <div class="card-text">
                    <h2>Math</h2>
                    <p>15 questions</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        max-width: 1000px;
        margin: 0 auto;
    }

    header {
        margin-bottom: 10px;
        margin-top: 30px;
        display: flex;
        align-items: center;
    }

    header h1 {
        font-weight: bold;
        margin-right: 30px;
    }

    header input {
        color: white;
        border: none;
        background-color: rgba(128,128,128,0.1);
        padding: 10px;
        border-radius: 5px;
    }

    .options-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
    }

    /* CARD */
    .card {
        width: 310px;
        overflow: hidden;
        border-radius: 2%;
        box-shadow: 1px 1px 10px rgba(255,255,255,0.1);
        margin-bottom: 35px;
        margin-right: 20px;
        cursor: pointer;

    }

    .card img {
        width: 100%;
        height: 190px;
        margin: 0;
    }

    .card .card-text h2 {
        font-weight: bold;
    }
</style>