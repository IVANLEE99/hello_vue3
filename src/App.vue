<template>
  <div class="app">
    <!-- vue3可以不需要跟节点 -->
    <Person></Person>
  </div>
</template>
<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { type Persons } from "@/types";
// let persons = 5
let persons: Persons = [
  { id: "1", name: "张三", age: 18 },
  { id: "2", name: "李四", age: 19 },
];

</script>
<style></style>
