<template>
  <div class="character-info-container">
    <div class="left-pane">
      <div v-if="item">
        <CharacterCardVue :character="item" />
      </div>

    </div>
    <div class="right-pane">
      <h3>Episodes where <span>{{ item.name }}</span> appears!</h3>
      <slot></slot>
    </div>

  </div>

</template>

<script>

import CharacterCardVue from './CharacterCard.vue';

export default {
  name: "ItemCard",
  props: ["item"],
  data() {
    return {
      title: "Card Title"
    }
  },
  components: {
    CharacterCardVue,
  },

}

</script>

<style scoped>
.character-info-container {
  max-width: 800px;
  background: #645CAA;
    display: flex;
    flex-direction: row;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
  
  }
  
  .left-pane {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #645CAA;
    height: 100%;
    position: relative;
  }
  
  .right-pane {
    color: white;
    min-width: 300px;
    /* background-color: red; */
    position: relative;
    padding: 20px;
  }
  
  .right-pane span {
    color: #ada9cb;
    font-size: 24px;
  }
</style>