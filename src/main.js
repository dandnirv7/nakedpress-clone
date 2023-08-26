import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueFeather from "vue-feather";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component(VueFeather.name, VueFeather);
app.use(router);
app.mount("#app");
