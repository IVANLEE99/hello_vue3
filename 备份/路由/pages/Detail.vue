<template>
  <!-- <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ name }}</li>
    <li>内容：{{ content }}</li>
  </ul>
  <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ name }}</li>
    <li>内容：{{ content }}</li>
  </ul> -->
  <!-- <ul class="news-list">
    <li>编号：{{ a }}</li>
    <li>标题：{{ b }}</li>
    <li>内容：{{ c }}</li>
  </ul> -->
  <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ name }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>
  
<script setup lang="ts" name="About">
import { useRoute } from "vue-router";
import { defineProps } from "vue";
// defineProps(["a", "b", "c"]);
defineProps(["id", "name", "content"]);
// const route = useRoute();
// console.log(route.query);
</script>
  
<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>