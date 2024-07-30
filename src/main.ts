import { createApp } from "vue";
import router from "./router";
import store from "./store";

import "./assets/css/style.css";
import "./registerServiceWorker";
import i18n from "./i18n";

import App from "./App.vue";

createApp(App).use(i18n).use(store).use(router).mount("#app");
