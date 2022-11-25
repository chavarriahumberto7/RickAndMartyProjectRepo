
<template>
    <div v-if="episodesTitle" class="container-episodes">
        <!--  -->
        <div v-if="store.current.episode">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <button class="modal-default-button" @click="handleClose(-1)">
                                X
                            </button>
        
                            <div class="modal-header">
                                <h4>Episode Title: </h4>
                                <h3>{{store.current.episode.name}}</h3>
        
                            </div>
        
                            <div class="modal-body">
                                <div class="item">
                                    <h4>Published on: </h4>
                                    <h3>{{store.current.episode.air_date}}</h3>
                                </div>
                                <div class="item">
                                    <h4>Episode Number: </h4>
                                    <h3>{{store.current.episode.episode}}</h3>
        
                                </div>
        
                            </div>
        
                            <div class="modal-footer">
                                <!-- <slot name="footer"> -->
                                <h3>Total charaters: {{ store.current.totalCharacters
                                    }}</h3>
        
                                <!-- </slot> -->
                            </div>
        
                        </div>
                    </div>
                </div>
            </transition>
            <!-- 
                                                                                                                                                                                                                                                                                                                                                                     -->
        </div>
        <!--  -->
        <div v-for="episode in episodesTitle" :key="episode" class="episode-container">
            <div class="upper-info">
                <h3>Episode:_{{ episode }}</h3>
            </div>
            <div class="lower-info">
                <button id="show-modal" @click="handleClick(episode)">View Details</button>
                <modal v-if="showModal" :store="store" @close="showModal = false" />
            </div>
        </div>

    </div>
</template>

<script>

import { useCharacterStore } from '../store/store';
import modal from './modal.vue';
import { ref } from 'vue';
const showModal = ref(false);
export default {
    name: "EpisodeCard",
    props: ["episodes"],
    setup(props) {
        const store = useCharacterStore();
        const { episodes } = props;
        const episodesTitle = episodes.map(item => {
            const splitItems = item.split("/");
            return splitItems[splitItems.length - 1];
        });

        return {
            episodesTitle,
            store,


        };
    },
    methods: {
        handleClick(episodeNumber) {

            this.store.loadEpisode(episodeNumber);
        },
        handleClose(episodeNumber) {

            this.store.loadEpisode(episodeNumber);
        }
    },
    components: { modal },
    data() {
        return {
            showModal: false
        }
    },
    mounted() {
        console.log('mounting episode');
        this.handleClose(-1, this.store)

    }
}



</script>

<style scoped>
.container-episodes {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    gap: 20px;
    justify-content: center;
        align-items: center;
}

/* MODALS STYLES */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    color:black;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
    display: flex;
    gap: 5px;

}

.modal-body {
    margin: 20px 0;
    color:black
}
.modal-body .item {
    display: flex;
    gap:5px;
}
.modal-footer{
    color: black
}
.modal-default-button {
    /* float: right; */
    position: absolute;
    margin-bottom: 20px;
    transform: translate(280px,0px);
    padding:10px;
    font-weight: bold;
    
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
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
    background: linear-gradient(45deg, #645CAA, #BF6B21, #F29494,
            #645CAA,
            white);
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