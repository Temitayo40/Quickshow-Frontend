import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import "./style.css";
// import { setupClerk } from "./plugins/clerk";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right",
});
app.use(router).mount("#app");
