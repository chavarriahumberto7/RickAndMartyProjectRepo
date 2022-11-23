import { onMounted } from 'vue';
<template>
    <div v-if="episodesTitle" class="container-episodes">
        <div v-for="episode in episodesTitle" :key="episode" class="episode-container">
            <div class="upper-info">
                <h3>Episode:_{{ episode }}</h3>
            </div>
            <div class="lower-info">
                <button>View more</button>
            </div>
        </div>

    </div>
</template>

<script>

import { useCharacterStore } from '../store/store';

export default {
    name: "EpisodeCard",
    props: ["episodes"],
    setup(props) {
        const store = useCharacterStore();

        const { episodes } = props;

        const episodesTitle = episodes.map(item => {
            const splitItems = item.split('/');
            return splitItems[splitItems.length - 1]
        })

        return {
            episodesTitle,
            store
        }

    }
}



</script>

<style scoped>
.container-episodes {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    gap: 20px;
}
</style>