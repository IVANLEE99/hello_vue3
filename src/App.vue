<template>
  <div class="app">
    <!-- vue3可以不需要跟节点 -->
    <Person></Person>
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
</style>
