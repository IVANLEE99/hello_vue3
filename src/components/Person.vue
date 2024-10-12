<!-- Person -->
<template>
  <div class="person">
    <h1>广东</h1>
    <h2 ref="guangzhou">广州</h2>
    <h3>海珠</h3>
    <button @click="showGuangzhou">获取广州</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, defineExpose } from "vue";
let guangzhou = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);
// console.log(guangzhou.value);
function showGuangzhou() {
  console.log(guangzhou.value);
}
defineExpose({
  guangzhou,
  a,
  b,
  c,
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
