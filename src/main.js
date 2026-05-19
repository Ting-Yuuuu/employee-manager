import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

//引入fontAwesome
/* 引入核心庫 */
import { library } from "@fortawesome/fontawesome-svg-core";
/* 引入 FontAwesomeIcon 組件 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* 引入你想用的具體圖示 (按需引入) */
import {
  faPen,
  faTrashCan,
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";

/* 將圖示加入圖示庫中 */
library.add(faPen, faTrashCan, faCircleLeft, faCircleRight);
/* 註冊全域組件，名稱定為 <font-awesome-icon> */
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

// axios套件必須使用vue3版本。使用插件方式運用VueAxios，這樣就能在組件裡面使用this.axios了。
app.use(router, VueAxios, axios);

app.mount("#app");
