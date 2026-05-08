import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入fontAwesome
/* 引入核心庫 */
import { library } from '@fortawesome/fontawesome-svg-core' 
/* 引入 FontAwesomeIcon 組件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 引入你想用的具體圖示 (按需引入) */
import { faPen, faTrashCan, faCircleLeft, faCircleRight} from '@fortawesome/free-solid-svg-icons'

/* 將圖示加入圖示庫中 */
library.add(faPen , faTrashCan, faCircleLeft, faCircleRight)
/* 註冊全域組件，名稱定為 <font-awesome-icon> */
const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon);

app.use(router)

app.mount('#app')
