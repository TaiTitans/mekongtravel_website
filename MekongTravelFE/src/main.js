import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import './index.css'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
createApp(App).use(router).use(PrimeVue).mount("#app");
