import { createRouter, createWebHistory } from 'vue-router'
import Enter from '../views/Enter.vue'
import Employee_list from '../views/Employee_list.vue'
import Edit_employee from '@/views/Edit_employee.vue'
import Add_employee from '@/views/Add_employee.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首頁',
      component: Enter,
    },
    {
      path: '/Employee_list', // 建議小寫並用橫線分隔，URL 比較美觀
      name: '全體員工資料表',
      component: Employee_list,
    },
    {
      path: '/Edit_employee', // 編輯通常需要帶 ID 參數
      name: '編輯員工資料',
      component: Edit_employee,
    },
    {
      path: '/Add_employee',
      name: '新增員工資料',
      component: Add_employee,
    },
  ],
})

export default router
