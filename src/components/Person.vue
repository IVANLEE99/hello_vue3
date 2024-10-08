<!-- Person -->
<template>
  <div class="person">
    <h2>watch 情况一 {{ sum }}</h2>
    <button @click="addSum">sum+1</button>
    <hr />
    <h2>watch 情况三 监听ref定义的对象类型</h2>
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

/*监视，
监视reactive定义的【对象类型】数据，且默认开启了深度监视。

 */
let stopWatch2 = watch(person, (newVal, oldVal) => {
  console.log("person 变了", newVal, oldVal);
});
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
