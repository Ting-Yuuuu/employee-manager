import { createRouter, createWebHistory } from "vue-router";
import Enter from "../views/Enter.vue";
import Employee_list from "../views/Employee_list.vue";
import Edit_employee from "@/views/Edit_employee.vue";
import Add_employee from "@/views/Add_employee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      meta: { breadcrumb: "首頁" },

      children: [
        {
          path: "/",
          component: Enter,
        },
        {
          path: "Employee_list",
          meta: { breadcrumb: "全體員工資料表" },
          children: [
            {
              path: "",
              component: Employee_list,
            },
            {
              path: "/Edit_employee",
              // path: "/Edit_employee/:id", //正常來說要帶id，但因為目前沒有資料庫，所以先不帶。
              meta: { breadcrumb: "編輯員工資料" },
              component: Edit_employee,
            },
            {
              path: "/Add_employee",
              meta: { breadcrumb: "新增員工資料" },
              component: Add_employee,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
