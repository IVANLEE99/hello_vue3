<template>
  <div class="app">
    <!-- vue3可以不需要跟节点 -->
    <Person ref="guangzhou"></Person>
    <!-- <Person></Person> -->
    <h5>guangzhou</h5>
    <button @click="showLog">输出ref</button>
  </div>
</template>
<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref } from "vue";
let guangzhou = ref();

function showLog() {
  console.log(guangzhou.value);
  console.log(guangzhou.value.a);
  console.log(guangzhou.value.b);
  console.log(guangzhou.value.c);
  console.log(guangzhou.value.guangzhou);
}
</script>
<style></style>
