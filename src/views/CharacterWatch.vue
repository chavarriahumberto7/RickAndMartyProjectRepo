<template>
    <div class="container">

        <h1>View Character</h1>
        <div>
            <div v-for="item in items" :key="item.id">
                <!-- <div v-if="item.id == this.$route.params.id"> -->
                <div v-if="item.id == $route.params.id">
                
                    <VSItemCard :item="item">
                        <VSReviews :item="item" />
                        <VSEpisodesCard :episodes="item.episode" />
                        </VSItemCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCharacterStore } from '../store/store';
import VSItemCard from '../components/VSItemCard.vue'
import VSEpisodesCard from '../components/VSEpisodesCard.vue';
import VSReviews from '../components/VSReviews.vue';

const store = useCharacterStore();
const items = store.current.items

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>