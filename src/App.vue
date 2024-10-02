<template>
  <div class="app">
    hello world d
    <Person></Person>
  </div>
</template>
<script lang="ts">
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Person,
  },
};
</script>
<style>
.app {
  background: #ddd;
  box-shadow: #ddd;
  padding: 20px;
  color: red;
}
</style>
