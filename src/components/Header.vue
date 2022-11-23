<script setup>

import { ref } from 'vue';
import { useCharacterStore } from '../store/store'
import Pagination from './Pagination.vue';


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
        <h2>Rick and Morty Characters</h2>
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
</style>