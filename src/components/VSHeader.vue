<template>
    <div class="container">
        <div class="title">
            <!-- <img src="./icons/Home.svg" alt="Home"> -->
            <h2>Rick and Morty Characters</h2>
        </div>
        <div class="header">
            <form action="" @submit.prevent="handleFilter">
                <input class="input" type="text" required v-model="characterName" />
                <div buttons>
                    <button type="submit">search</button>
                    <button action="" @click.prevent="handleSorting">
                        <img v-if="sortingMode === SORTING_MODE_ASCENDING" class="action-icon" src='./icons/sortAscending.png' alt=""
                            @click.prevent="handleSorting">
                        <img v-if="sortingMode === SORTING_MODE_DESCENDING" class="action-icon" src='./icons/sortDescending.png' alt=""
                            @clik.prevent="handleSorting">
                    </button>
                </div>
            </form>
            
        </div>
    </div>

</template>


<script setup>

import { ref } from 'vue';
import { useCharacterStore } from '../store/store'

const SORTING_MODE_ASCENDING = 'asc';
const SORTING_MODE_DESCENDING = 'des';

const characterName = ref('');
const sortingMode = ref(SORTING_MODE_ASCENDING);
const store = useCharacterStore();

function handleFilter() {
    if (!!characterName.value) {

        store.filterCharacters(characterName.value)
    }
}

function handleSorting() {
    // sortingMode = 'asc';

    console.log(sortingMode.value)

    store.sortCharacters(sortingMode.value === SORTING_MODE_ASCENDING);

    sortingMode.value = sortingMode.value === SORTING_MODE_DESCENDING ? SORTING_MODE_ASCENDING : SORTING_MODE_DESCENDING;
}
</script>


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

.header form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
        padding: 20px;
        line-height: 50px;
        
}
.header form div{
    display: flex;
    gap: 10px;
    padding: 10px 0px;
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

.input {
    padding: 5px 15px;
    border: solid 3px #645CAA;
    border-radius: 15px;
    margin: 5px 0;
    margin: 0 10px;
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