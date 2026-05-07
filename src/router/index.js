import { createRouter, createWebHistory } from 'vue-router'
import Enter from '../views/Enter.vue'
import Employee_list from '../views/Employee_list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children:[
        {
          path: '/',
          name: '首頁',
          component: Enter,
        },
        {
          path: '/Employee_list',
          name: '全體員工資料表',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: Employee_list,
        },
      ]
    },

  ],
})

export default router
