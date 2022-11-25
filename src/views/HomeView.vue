<script setup>
import Header from '../components/VSHeader.vue';
import Characters from '../components/VSCharacter.vue'
import Pagination from '../components/VSPagination.vue';

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