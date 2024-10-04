<!-- Person -->
<template>
  <div class="person">
    <h2>姓名：{{ person.name }}{{ name }}</h2>
    <h2>年龄：{{ person.age }}{{ age }}{{ nl }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
});
// let { name, age } = person;
let { name, age } = toRefs(person);
let nl = toRef(person, "age");
function changeName() {
  person.name += "~";
  console.log(person.name, name);
}
function changeAge() {
  person.age += 1;
  console.log(person.age, age);
}
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
