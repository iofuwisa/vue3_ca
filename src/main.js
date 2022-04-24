import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import article from "./vuex_modules/article_module.js";

import "./api/article_api";

const store = createStore({
  modules: {
    article: article,
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
