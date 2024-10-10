<!-- Person -->
<template>
  <div class="person">
    <h2>watch 情况一 {{ sum }}</h2>
    <button @click="addSum">sum+1</button>
    <hr />
    <h2>watch 情况四 监视ref或reactive定义的【对象类型】数据中的某个属性</h2>
    name:{{ person.name }}
    <br />
    age:{{ person.age }}
    <br />
    汽车c1:{{ person.car.c1 }}
    <br />
    汽车c2:{{ person.car.c2 }}
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改c1</button>
    <button @click="changeC2">修改c2</button>
    <button @click="changeCar">修改car</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed, watch, reactive } from "vue";
let sum = ref(0);
function addSum() {
  sum.value += 1;
}
let stopWatch = watch(sum, (newval, oldval) => {
  console.log("watch", newval, oldval);
  if (newval > 10) {
    stopWatch();
  }
});

let person = reactive({
  name: "张三",
  age: 9,
  car: {
    c1: "奥迪",
    c2: "宝马",
  },
});
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changePerson() {
  Object.assign(person, {
    name: "李四",
    age: 44,
  });
}
function changeC1() {
  person.car.c1 = "雅迪";
}
function changeC2() {
  person.car.c2 = "爱马";
}
function changeCar() {
  person.car = {
    c1: "车1",
    c2: "车2",
  };
}

/*监视，
监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
 */
watch(
  () => person.name,
  (newval, oldval) => {
    console.log("person.name数据变化了");
  }
);
// 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
// watch(person.car, (newval, oldval) => {
//   console.log("person.car数据变化了~", newval, oldval);
// });
watch(
  () => person.car,
  (newval, oldval) => {
    // console.log("person.car数据变化了~", newval, oldval);
  },
  {
    deep: true,
  }
);
/*
情况五
监视上述的多个数据
*/
watch(
  [() => person.name, () => person.car],
  (newValue, oldValue) => {
    console.log("person.car变化了", newValue, oldValue);
  },
  { deep: true }
);
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
