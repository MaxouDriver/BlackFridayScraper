import { createApp } from "vue";

import router from "./router.js";
import store from "./store.js";
import BaseButton from "./components/global/BaseButton";
import IconButton from "./components/global/IconButton";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/style/main.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("icon-button", IconButton);
app.mount("#app");
