<!-- Person -->
<template>
  <div class="person">
    <h2>watch 情况一 {{ sum }}</h2>
    <button @click="addSum">sum+1</button>
    <hr />
    <h2>watch 情况二 监听ref定义的对象类型</h2>
    name:{{ person.name }}
    <br />
    age:{{ person.age }}
    <br />
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed, watch } from "vue";
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

let person = ref({
  name: "张三",
  age: 9,
});
function changeName() {
  person.value.name += "~";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = {
    name: "李四",
    age: 44,
  };
}

/*监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） */
let stopWatch2 = watch(
  person,
  (newVal, oldVal) => {
    console.log("person 变了", newVal, oldVal);
  },
  { deep: false, immediate: false }
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
