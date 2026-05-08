<script setup>
import { RouterLink } from 'vue-router';  
</script>

<template>
  <div class="wrapper">
    <!-- 麵包屑 -->
    <div class="breadcrumb_block">
      <RouterLink to="/"  class="breadcrumb">首頁</RouterLink>
      <a class="breadcrumb">></a>
      <RouterLink to="/Employee_list" class="breadcrumb">全體員工資料表</RouterLink>
      <a class="breadcrumb">></a>
      <a href="./edit_staff.html" class="breadcrumb">編輯員工資料</a>
    </div>
    
    <!-- 標題 -->
    <div class="title_block">
      <h2 class="title">編輯員工資料</h2>
    </div>

    <!-- 內容區 -->
    <form class="content">
      <div class="two_block">
        <div class="information">
          <label for="">*ID</label>
          <input type="text" class="" placeholder="001" disabled>
          <p class="hint">*ID無法變更</p>
        </div>
        <div class="information">
          <label for="">*所屬部門</label>
          <select name="" id="">
            <option value="">-請選擇-</option>
            <option value="1">主管部門</option>
            <option value="2">前端部門</option>
            <option value="3">後端部門</option>
          </select>
          <p class="hint">*必填</p>
        </div>
      </div>
      <div class="two_block">
        <div class="information">
          <label for="">*員工職務</label>
          <input type="text" class="" placeholder="請輸入職務" >
          <p class="hint">*必填</p>
        </div>
        <div class="information">
          <label for="">*員工姓名</label>
          <input type="text" class="" placeholder="請輸入姓名" >
          <p class="hint">*必填</p>
        </div>
      </div>
      <div class="two_block">
        <div class="information">
          <label for="">*電子信箱</label>
          <input type="text" class="" placeholder="請輸入電子信箱" >
          <p class="hint">*必填 格式為xxxxx@xxxxx.com</p>
        </div>
        <div class="information">
          <label for="">*手機號碼</label>
          <input type="text" class="" placeholder="請輸入手機號碼" >
          <p class="hint">*必填</p>
        </div>
      </div>
      <div class="information">
        <label for="">*出生年月日</label>
        <input type="date" class="date" placeholder="" >
          <p class="hint">*必填</p>
      </div>
    </form>
    <div class="btn_block">
     <RouterLink to="/Employee_list" class="submit">送出</RouterLink>
     <RouterLink to="/Employee_list" class="cancel">取消</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* 內容區 */
.wrapper{
  width: 90%;
  margin: 0 auto;
}

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

/* 標題 */
.title_block{
  display: inline-block;
  padding: 0px 10px;
  border-left: 3px solid #535353;
  margin-bottom: 16px;
}

.title{
  color: #828282;
  margin: 0;
}

/* 內容 */
.content{
  border: 2px solid #A29D9D;
  border-radius: 12px;
  padding: 40px 40px 24px 40px;
  margin: 0 auto 16px;
}

.two_block{
  display: flex;
  width: 100%;
}

.information{
  flex-direction: column;
  width: 20%;
  margin-bottom: 20px;
  display: flex;
  width: 50%;
}

.information label{
  margin-bottom: 8px;
  text-align: left;
}

.information select{
  width: 70%;
  height: 35px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #a9a9a9;
  outline: none;
  padding-left: 8px;
  box-sizing: border-box;
  padding-right: 8px;
}

.information input{
  width: 70%;
  height: 35px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #a9a9a9;
  outline: none;
  padding-left: 8px;
  box-sizing: border-box;
}

.information .date{
  width: 69%;
  padding-right: 8px;
  box-sizing: border-box;
}

.hint{
  color: red;
  font-size: 12px;
  margin: 4px 0 0;
  text-align: left;
}

/* 送出取消按鈕 */
.btn_block{
  margin-bottom: 16px;
  display: flex;
  justify-content: end;
  gap:8px;
}

.submit{
  width: 150px;
  height: 40px;
  background-color: #88cbf1;
  color: #fff;
  border-radius: 12px;
  font-size: 14px;
  border: none;
  text-align: center;
  text-decoration: none;
  line-height: 40px;
}

.submit:hover{
  background-color: #48b1e8;
  color: #fff;
}

.cancel{
  width: 150px;
  height: 40px;
  background-color: #a9a9a9;
  color: #fff;
  border-radius: 12px;
  font-size: 14px;
  border: none;
  text-align: center;
  text-decoration: none;
  line-height: 40px;
}

.cancel:hover{
  background-color: #898989;
}


/* RWD */
@media(max-width:800px){
  .two_block{
    flex-direction: column;

  }

  .information{
    width: 100%;
  }

  .information input{
    width: 100%;
  }

  .information select{
    width: 100%;
  }

  .information .date{
    width: 100%;
  }
}

</style>