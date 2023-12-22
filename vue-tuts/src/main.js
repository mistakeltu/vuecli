import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

Vue.component("Users", Home);
Vue.component("App-Header", Header);
Vue.component("App-Footer", Footer);

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
