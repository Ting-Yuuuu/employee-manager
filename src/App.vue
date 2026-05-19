<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

</script>

<template>
  <Header></Header>
  <div class="wrapper">
    <Breadcrumb></Breadcrumb>
    <RouterView />
  </div>
</template>

<style scoped>
  .wrapper{
    width: 90%;
    margin: 0 auto;
  }
</style>
