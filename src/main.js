import { createApp } from 'vue'
import router from './router'
import './style.scss'
import App from './App.vue'
import vant from 'vant';
import 'vant/lib/index.css'; //侧边栏样式引入



const app = createApp(App)
app.use(router);
app.use(vant)

app.mount("#app");
