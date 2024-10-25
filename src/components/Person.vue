<!-- Person -->
<template>
  <div class="person">
    sum:{{ sum }}
    <br>
    <button @click="add">点我+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
const sum = ref(0);
const add = () => {
  sum.value++;
};
console.log('子--创建～');
onBeforeMount(() => {
  console.log('子--挂载前～');
});
onMounted(() => {
  console.log('子--挂载后～');
});
onBeforeUpdate(() => {
  console.log('子--更新前～');
});
onUpdated(() => {
  console.log('子--更新后～');
});
onBeforeUnmount(() => {
  console.log('子--卸载前～');
});
onUnmounted(() => {
  console.log('子--卸载后～');
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
