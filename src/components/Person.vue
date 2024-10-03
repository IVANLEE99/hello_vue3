<!-- Person -->
<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>
<!-- <script lang="ts">
export default {
  name: "Person",
};
</script> -->
<script lang="ts" setup name="Person233">
console.log("setup"); //1、setup比 beforeCreate更先执行～
console.log("@@this", this); //2、setup中的this为undefined，vue3中已经弱化this

import { ref } from "vue";
//3、数据，原来写在data中，此时name age tel都不是响应式的数据
let name = ref("张三");
let age = ref(18);
let tel = "1333";

function changeName() {
  name.value = "youngs001";
  console.log(1, name); //4、注意这样修改name，页面是没有变化的
}
function changeAge() {
  age.value += 1;
  console.log(2, age);
}
function showTel() {
  alert(tel);
  console.log(3, tel);
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
