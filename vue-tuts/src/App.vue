<template>
  <div>
    <App-Header v-bind:name="name"></App-Header>
    <div>
      <h1>{{ title }}</h1>
      <form-helper>
        <div slot="form-header">
          <h3>Title of the form</h3>
        </div>
        <div slot="form-fields">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Surname" required />
        </div>
        <div slot="form-controls">
          <button v-on:click="submit">Submit</button>
        </div>
      </form-helper>
      <!-- Jei norime jog atributas butu dinaminis, turime naudoti v-bind: -->
      <Users v-bind:ninjas="ninjas"></Users>
    </div>
    <component v-bind:is="component"></component>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
    <App-Footer
      v-bind:name="name"
      v-on:changeName="updateName($event)"
    ></App-Footer>
  </div>
</template>

<script>
import formOne from "./components/formOne";
import formTwo from "./components/formTwo";
//importing localy
// import Home from "./Home.vue";
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
// import formHelper from "./components/formHelper";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  // components: { users: Home },
  // components: {
  //   "app-header": Header,
  //   "app-footer": Footer
  // },
  // components: {
  //   "form-helper": formHelper
  // },
  data() {
    return {
      pav: "Dynami slot title",
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
      name: "Users app",
      component: "form-two"
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
