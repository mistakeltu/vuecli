<template>
  <div>
    <App-Header v-bind:name="name"></App-Header>
    <div>
      <h1>{{ title }}</h1>
      <!-- Jei norime jog atributas butu dinaminis, turime naudoti v-bind: -->
      <Users v-bind:ninjas="ninjas"></Users>
    </div>
    <App-Footer
      v-bind:name="name"
      v-on:changeName="updateName($event)"
    ></App-Footer>
  </div>
</template>

<script>
//importing localy
// import Home from "./Home.vue";
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
import { formHelper } from "./components/formHelper.vue";
export default {
  // components: { users: Home },
  // components: {
  //   "app-header": Header,
  //   "app-footer": Footer
  // },
  components: {
    "form-helper": formHelper
  },
  data() {
    return {
      title: "First app.",
      "list-name": "List of users",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      name: "Users app"
    };
  },
  methods: {
    updateName: function(updatedName) {
      this.name = updatedName;
    }
  }
};
</script>

<style scoped>
h1 {
  color: darkgreen;
}
</style>
