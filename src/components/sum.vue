<template>
  <div class="sum">
    当前求和为：{{ countStore.count }}
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
import { useCountStore } from "@/store/count";
const countStore = useCountStore();
// const sum = ref(1);
const n = ref(1);
function add() {
  // sum.value += n.value;
  // 第一种修改数据的方法
  // countStore.count += n.value;
  // 第二种修改数据的方法
  countStore.$patch({ count: countStore.count + n.value, time: "dfdfd" });
  // 第三种修改数据的方法
  // countStore.increment(n.value);
}
function sub() {
  // sum.value -= n.value;
}
</script>
  
<style scoped>
.sum {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}
</style>
  