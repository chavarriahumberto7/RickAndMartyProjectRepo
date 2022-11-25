<template>

    <div v-if="store.current.source" class="container">
        <div v-for="character in store.current.items">
            <router-link :to="{
                name: 'character-watch', params: { id: character.id }
            }">

                <CharacterCardVue :character="character" />

            </router-link>
        </div>
    </div>
</template>

<script setup>

import { useCharacterStore } from '../store/store'
import CharacterCardVue from './CharacterCard.vue';

const store = useCharacterStore();


</script>

<style scoped>
.container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    padding: 20px 10px;
    /* background-color: #645CAA; */
}
</style>