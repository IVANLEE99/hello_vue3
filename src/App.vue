<template>
  <div class="app">
    <!-- vue3可以不需要跟节点 -->
    <Person v-if="isShow"></Person>
  </div>
</template>
<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref } from "vue";
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
const isShow = ref(true);
console.log('父--创建～');
onBeforeMount(() => {
  console.log('父--挂载前～');
});
onMounted(() => {
  console.log('父--挂载后～');
});
onBeforeUpdate(() => {
  console.log('父--更新前～');
});
onUpdated(() => {
  console.log('父--更新后～');
});
onBeforeUnmount(() => {
  console.log('父--卸载前～');
});
onUnmounted(() => {
  console.log('父--卸载后～');
});
</script>
<style></style>
