import { createApp } from "vue";
// 第一步引入pinia
import { createPinia } from "pinia";
import App from "./App.vue";
let app = createApp(App);
// 第二步创建pinia实例
let pinia = createPinia();
// 第三步使用pinia
app.use(pinia);
app.mount("#app");
