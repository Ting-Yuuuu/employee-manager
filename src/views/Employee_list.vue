<script setup>
import { RouterLink,RouterView } from 'vue-router';
import { ref } from 'vue'

const employee_list = ref([
  {
    id: '1', 
    department: '主管部門', 
    job: '執行長', 
    name: '林庭郁', 
    email: 'wendy@gmail.com', 
    phone: '0987654321', 
    birthday: '1997/04/13',
  },
  {
    id: '2', 
    department: '前端部門', 
    job: '前端工程師', 
    name: '鄭丞恩', 
    email: 'dandy@gmail.com', 
    phone: '0987654321', 
    birthday: '2001/11/03',
  },
  {
    id: '3', 
    department: '後端部門', 
    job: '後端工程師', 
    name: '洪誠佑', 
    email: 'wendy@gmail.com', 
    phone: '0987654321', 
    birthday: '1997/04/13',
  },
  {
    id: '4', 
    department: '前端部門', 
    job: '技術主管', 
    name: '林榆凱', 
    email: 'wendy@gmail.com', 
    phone: '0987654321', 
    birthday: '1997/04/13',
  },
  {
    id: '5', 
    department: '後端部門', 
    job: '後端工程師', 
    name: '黃品瑜', 
    email: 'wendy@gmail.com', 
    phone: '0987654321', 
    birthday: '1997/04/13',
  },
])
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log(router.currentRoute.value.name);
const routeArray=router.getRoutes();
console.log( `${routeArray[0].name} / ${routeArray[1].name}`);
console.log( ref);
// console.log( );
// console.log(route);


function pushWithQuery(query) {
  router.push({
    name: 'search',
    query: {
      ...route.query,
      ...query,
    },
  })
}

function goBack(){
  router.getRoutes()
}

</script>

<template>
  <div class="wrapper">
    <!-- 麵包屑 -->
    <div class="breadcrumb_block">
      <RouterLink to="/" class="breadcrumb">首頁</RouterLink>
      <a class="breadcrumb">></a>
      <a href="" class="breadcrumb">全體員工資料表</a>
    </div>
    
    <!-- 標題 -->
    <div class="title_block">
      <h2 class="title">全體員工資料表</h2>
    </div>

    <!-- 搜尋區塊 -->
    <div class="search_block">
      <div class="search_first_block">
        <div class="search">
          <label for="">所屬部門</label>
          <select name="" id="" class="dropdown">
            <option value="">-請選擇-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="search">
          <label for="">工作職稱</label>
          <select name="" id="" class="dropdown">
            <option value="">-請選擇-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div class="search_second_block">
        <div class="search">
          <label for="">搜尋</label>
          <input type="text" class="" placeholder="請輸入內容">
        </div>
        <div class="add_block">
          <a href="./add_staff.html" class="add_btn">新增資料</a>
          <div class="data_block">
            <div class="data">
              <p>資料筆數：</p>
              <p class="total_list"></p>
            </div>
            <div class="page">
              <i class="fa-regular fa-circle-left"></i>
              <p>1/1</p>
              <i class="fa-regular fa-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table_block">
      <table class="staff_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>所屬部門</th>
            <th>工作職稱</th>
            <th>員工姓名</th>
            <th>電子信箱</th>
            <th>手機號碼</th>
            <th>出生年月日</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employee_list" @click="goBack()">
            <td>{{ employee.id }}</td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.job }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.birthday }}</td>
            <td><div>工具一</div><div>工具二</div></td>
          </tr>
        </tbody>
      </table>
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
.breadcrumb_block{
  display: flex;
  gap: 8px;
  margin: 16px 0;
  align-items: center;
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

/* 搜尋區塊 */
.search_block{
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
}

.search_first_block{
  display: flex;
  width: 40%;
  gap: 12px;
}

.search_first_block .search{
  width: 100%;
}

.search{
  display: flex;
  flex-direction: column;
  width: 20%;
}

.search_second_block{
  display: flex;
  width: 60%;

}

.search_second_block .search{
  display: flex;
  width: 36%;
  
}

.search label{
  margin-bottom: 8px;
}

.search .dropdown{
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-radius: 8px;
  border-color: #a9a9a9;
}

.search_second_block input{
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #a9a9a9;
  outline: none;
  padding-left: 8px;
  box-sizing: border-box;
}

/* 新增資料 */
.add_block{
  margin-left: auto;
}

.add_btn{
  display: block;
  text-decoration: none;
  background-color:#88cbf1 ;
  color: #fff;
  padding: 8px;
  width: 250px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  margin-bottom: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.add_btn:hover{
  background-color: #48b1e8;
  color: #fff;
}

.data_block{
  display: flex;
  justify-content: space-between;
}

.data{
  display: flex;
}

.data p{
  margin: 0;
}

.page{
  display: flex;
  align-items: center;
  gap: 8px;
}

.page p{
  margin: 0;
}

i.fa-regular{
  font-size: 20px;
  cursor:pointer;
}

/* 表格 */
.table_block{
  width: 100%;
}

table{
  border-collapse: collapse;
  border: 1px solid lightgray;
  width: 100%;
  text-align: center;
  text-wrap: nowrap;
}

table, th,td{
  border: 1px solid rgb(127, 127, 127);
}

thead{
  border-radius: 12px 12px 0 0;
}

thead th{
  padding: 8px;
  background-color: #b5b4b4;
  color: #fff;
}

tbody td{
  padding: 8px;
}

.tool{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  height: fit-content;
}

.tool i{
  font-size: 16px;
  cursor: pointer;
}

td a{
  text-decoration: none;
  color: #333333;
  display: block;
}

/* RWD */
@media(max-width:800px){
  .search_block{
    flex-direction: column;
  }

  .search_first_block{
    width: 100%;
  }

  .search_second_block{
    width: 100%;
    gap: 12px;
  }

  .search_second_block .search{
    width: 50%;
  }

  .search_second_block input{
    width: 100%;
  }
  
  .add_block{
    width: 50%;
  }

  .add_btn{
    width: 100%;
  }

  .table_block{
    overflow-x: auto;
  }
}

@media(max-width:500px){
  .search_second_block{
    flex-direction: column;;
  }

  .search_second_block .search{
    width: 100%;
  }

  .search_second_block input{
    margin-bottom: 12px;
  }

  .add_block{
    width: 100%;
  }

  .add_btn{
    width: 100%;
  }
}

</style>
