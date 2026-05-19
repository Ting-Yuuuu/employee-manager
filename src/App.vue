<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

</script>

<template>
  <Header></Header>
  <Breadcrumb></Breadcrumb>
  <RouterView />
</template>

<style scoped>

</style>
