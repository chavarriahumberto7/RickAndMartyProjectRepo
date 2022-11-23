<script setup>
import { useCharacterStore } from '../store/store'
import Header from '../components/Header.vue';
import Characters from '../components/Characters.vue'
import Pagination from '../components/Pagination.vue';

const store = useCharacterStore();

</script>

<template>
  <div class="home">

    <Header />
    <Pagination />
    <Characters />
    <Pagination />

  </div>
</template>


<style>
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
</style>