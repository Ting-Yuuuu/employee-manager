<template>
  <div class="breadcrumb_block">
    <RouterLink to="/"  class="breadcrumb">首頁</RouterLink>
    <a class="breadcrumb">></a>
    <RouterLink to="/Employee_list" class="breadcrumb">全體員工資料表</RouterLink>
    <a class="breadcrumb">></a>
    <RouterLink to="/Edit_employee" class="breadcrumb">編輯員工資料</RouterLink>
  </div>
</template>

<script setup>
  import { useRoute, RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
 /* 麵包屑 */
.breadcrumb_block{
  display: flex;
  gap: 8px;
  margin: 16px 0;
}

.breadcrumb{
  color: #333333;
  font-size: 16px;
  padding: 10px 0px;
  text-decoration: none;
}

</style>