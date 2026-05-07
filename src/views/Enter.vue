<script setup>
import Header from '@/components/header.vue';
</script>

<template>
  <Header></Header>
  <div class="wrapper">
    <!-- 麵包屑 -->
    <p class="breadcrumb">首頁</p>
    
    <!-- 標題 -->
    <div class="title_block">
      <h2 class="title">首頁</h2>
    </div>

    <div class="content">
      <RouterLink to="/Employee_list"><img src="/src/assets/images/enter.webp" width="450" alt=""></RouterLink>
      <RouterLink to="/Employee_list"><a class="enter_btn">進入員工資料表</a></RouterLink>
    </div>
  </div>
</template>

<style>
/* 內容區 */
.wrapper{
  width: 90%;
  margin: 0 auto;
}

/* 麵包屑 */
.breadcrumb{
  color: #333333;
  font-size: 16px;
  padding: 10px 0px;
}

/* 標題 */
.title_block{
  display: inline-block;
  padding: 0px 10px;
  border-left: 3px solid #535353;
}

.title{
  color: #828282;
  margin: 0;
}

/* 內容 */
.content{
  display: block;
  text-align: center;
  margin: 10% auto 0;
}

.content img{
  border-radius: 8px;
}

@media (max-width:500px) {
  .content img{
    width: 90%;
  }
}

.enter_btn{
  display: block;
  text-decoration: none;
  background-color:#88cbf1 ;
  color: #fff;
  padding: 8px;
  width: 500px;
  margin: 10px auto;
  border-radius: 8px;
  font-weight: bold;
}

@media (max-width:600px) {
  .enter_btn{
    width: 350px;
  }
}

.enter_btn:hover{
  background-color: #48b1e8;
  color: #fff;
}
</style>