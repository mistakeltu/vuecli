<template>
  <header>
    <h1>{{ title }}</h1>
    <h3>{{ name }}</h3>
  </header>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      title: "Home Page"
    };
  },
  created() {
    eventBus.$on("changedName", data => {
      this.name = data;
    });
  }
};
</script>

<style scoped>
header {
  background: lightblue;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
