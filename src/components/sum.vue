<template>
  <div class="sum">
    当前求和为：{{ sum }}
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>
  
  <script lang="ts" setup name="Sum">
import { ref } from "vue";
const sum = ref(1);
const n = ref(1);
function add() {
  sum.value += n.value;
}
function sub() {
  sum.value -= n.value;
}
</script>
  
<style scoped>
.sum {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}
</style>
  