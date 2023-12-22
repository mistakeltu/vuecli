<template>
  <footer>
    <p>{{ copyright }}</p>
    <p v-on:click="changeName">{{ name }}</p>
  </footer>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      copyright: "Copyrigth 2023 Karolis"
    };
  },
  methods: {
    changeName: function() {
      //this.$emit("changeName", "New name");
      this.name = "New name";
      eventBus.$emit("changedName", "New name");
    }
  }
};
</script>

<style scoped>
footer {
  background-color: #222;
  padding: 6px;
}
p {
  color: lightblue;
  text-align: center;
}
</style>
