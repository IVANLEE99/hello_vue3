<!-- Person -->
<template>
  <div class="person">
    <h2>sum: {{ sum }}</h2>
    <h2>bigSum: {{ bigSum }}</h2>
    <button @click="add">点我+1</button>
    <br>
    <h2>狗的图片</h2>
    <img v-for="(dog, index) in dogsList" :key="index" :src="dog">
    <button @click="getDog">再来一张</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useSum from '../hooks/useSum';
import useDog from '../hooks/useDog';
const { sum, add, bigSum } = useSum();
const { dogsList, getDog } = useDog();
</script>
<style scoped>
.person {
  background: skyblue;
  padding: 20px;
}

button {
  margin: 0 5px;
}

img {
  width: 200px;
  margin: 10px;
}
</style>
