<script setup>

import { ref } from 'vue';
import { useCharacterStore } from '../store/store'


const characterName = ref('');
const sortingMode = ref('desc');
const store = useCharacterStore();

function handleFilter() {
    if (!!characterName.value) {

        store.filterCharacters(characterName.value)
    }
}

function handleSorting() {
    // sortingMode = 'asc';
    store.sortCharacters();
}
</script>

<template>
    <div class="container">
        <div class="title">
            <!-- <img src="./icons/Home.svg" alt="Home"> -->
            <h2>Rick and Morty Characters</h2>
        </div>
        <div class="header">
            <form action="" @submit.prevent="handleFilter">
                <input @change="handleFilter" type="text" required v-model="characterName" />
                <button type="submit">search</button>
            </form>
            <button action="" @submit.prevent="handleSorting">
                <img class="action-icon" src='./icons/sortAscending.png' alt="" @submit="handleSorting">
            </button>
        </div>
    </div>

</template>

<style scoped>
.title {
    display: flex;
    align-items: center;
    font-size: 20px;
}

.title img {
    height: 3.5em;
    ;
}

.header {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
}

.container h2 {
    color: #645CAA;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.action-icon {
    height: 15px;
    width: 15px;
}

button {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 30px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    border-radius: 12px;
}

button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #645CAA, #F29494,
            #645CAA, white);
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;

}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }

}
</style>