
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
import { onMounted } from 'vue'
import { useCharacterStore } from '../store/store';
const store = useCharacterStore();

function handleClick(source) {
  store.loadSource(source);
}

onMounted(() => {
  if (!store.current.items) {

    handleClick(1);
    console.log('mounting pagination')
  }

})

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