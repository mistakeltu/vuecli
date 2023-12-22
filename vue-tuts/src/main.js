import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import formHelper from "./components/formHelper";
// import formOne from "./components/formOne";
// import formTwo from "./components/formTwo";

Vue.component("Users", Home);
Vue.component("App-Header", Header);
Vue.component("App-Footer", Footer);
Vue.component("form-helper", formHelper);
// Vue.component("form-one", formOne);
// Vue.component("form-two", formTwo);

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
