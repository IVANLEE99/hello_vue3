<template>
  <div class="app">
    <!-- vue3可以不需要跟节点 -->
    <Person ref="guangzhou"></Person>
  </div>
</template>
<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref } from "vue";
let guangzhou = ref();


</script>
<style></style>
