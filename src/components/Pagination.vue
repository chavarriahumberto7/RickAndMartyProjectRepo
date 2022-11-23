
<template>
  <div class="pagination-row">
    <button class="pagination-button">&lt;</button>
    <span v-for="(item, index) in new Array(10)" :key="index">
      <button class="pagination-button" @click.prevent="() => handleClick(index + 1)">{{ index + 1 }}</button>
    </span>
    <button class="pagination-button">&gt;</button>
  </div>
  <slot name="data" />
</template>

<script setup>
import { useCharacterStore } from '../store/store';


const store = useCharacterStore();

function handleClick(source) {
  store.loadSource(source);
}

</script>

<style lang="css" scoped>
.pagination-button {
  padding: 8px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}

.pagination-row {
  padding: 5px 0px;
}
</style>
