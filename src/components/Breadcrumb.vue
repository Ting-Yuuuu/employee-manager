<template>
  <div class="breadcrumb">
    <RouterLink :to="breadcrumb.path" class="breadcrumb__item" v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
      <span>{{ breadcrumb.name }}</span>
      <a class="breadcrumb__item">></a>
    </RouterLink>

  </div>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { ref } from 'vue'
import { watch } from "vue";

// 這個是響應式容器，放麵包屑用
const breadcrumbs = ref([])
const route = useRoute();

watch(
  // 監聽對象：路由
  () => route.fullPath,
  // 執行邏輯：放這
  () => {
    // 麵包屑容器裝的是 route.matched，你可以印出來看看
    breadcrumbs.value = route.matched
    // 這裡我只要有帶meta breadcrumb的路由，才會放到麵包屑裡面
      .filter((item) => item.meta?.breadcrumb)
      // 轉換成我們要的格式，放到麵包屑容器裡面，這步你可以隨意設計，我這裡是放 name 和 path。
      .map((item) => ({
        name: item.meta.breadcrumb,
        path: item.path,
      }));
  },
  {
    // immediate: true 的意思是：在監聽開始後，立即執行一次回調函數，這樣就能在頁面初始載入時就生成麵包屑了。
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
/* 麵包屑 */
.breadcrumb {
  display: flex;
  gap: 8px;
  margin: 16px 0;

  &__item {
    color: #333333;
    font-size: 16px;
    padding: 10px 0px;
    text-decoration: none;
  }
}
</style>