<!-- Person -->
<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    水位:{{ height }}
    <br />
    温度：{{ temp }}
    <br />
    <button @click="changeHeight">水位+10</button>
    <button @click="changeTemp">温度+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from "vue";
let temp = ref(10);
let height = ref(10);
function changeHeight() {
  height.value += 10;
}
function changeTemp() {
  temp.value += 10;
}
// watch([temp, height], (val) => {
//   let [t2, h2] = val;
//   if (t2 >= 50 || h2 > +20) {
//     console.log("联系服务器～");
//   }
// });
watchEffect(() => {
  console.log("watchEffect~~");
  if (temp.value >= 50 || height.value > 20) {
    console.log("联系服务器～");
  }
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
