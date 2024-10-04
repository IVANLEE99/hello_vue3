<!-- Person -->
<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr />
    <h2>车辆信息：品牌：{{ car.brand }},价格：{{ car.price }}万</h2>
    <button @click="changePrice">修改车辆价格</button>
    <button @click="changeCar">修改车</button>
    <hr />
    <h2>游戏列表</h2>
    <ul>
      <li v-for="(g, i) in games" :key="i">{{ g }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的信息</button>
    <hr />
    <h2>很深的对象c.d：{{ obj.a.b.c.d }}</h2>
    <button @click="test">test</button>
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
import { reactive } from "vue";
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

let car = reactive({
  brand: "宝马",
  price: 2000,
});
let car2 = reactive({
  brand: "奥拓",
  price: 1,
});
console.log("car:", car);
function changePrice() {
  car.price += 10;
}
function changeCar() {
  // car = {
  //   brand: "奥拓",
  //   price: 1,
  // };
  // car = reactive({
  //   brand: "奥拓",
  //   price: 1,
  // });
  // car = car2;
  car = Object.assign(car, {
    brand: "奥拓",
    price: 1,
  });
}

let games = ref(["lol", "王者荣耀", "原神"]);
function changeFirstGame() {
  games.value[0] = "三国杀";
}

let obj = reactive({
  a: {
    b: {
      c: {
        d: "dddddd",
      },
    },
  },
});
function test() {
  obj.a.b.c.d = "999";
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
