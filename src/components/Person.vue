<!-- Person -->
<template>
  <div class="person">
    {{ person.name }}
    <br />
    {{ persons }}
    <br />
    {{ ps }}
  </div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from "@/types";
let person: PersonInter = { id: "1", name: "张三", age: 18 };
let persons: Persons = [
  { id: "1", name: "张三", age: 18 },
  { id: "2", name: "李四", age: 19 },
];
let ps: Array<PersonInter> = [
  { id: "1", name: "张三", age: 18 },
  { id: "2", name: "李四", age: 19 },
];
</script>
<style scoped>
.person {
  background: skyblue;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
