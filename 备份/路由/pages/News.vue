<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- <router-link
          :to="`/news/detail?id=${news.id}&name=${news.name}&content=${news.content}`"
          >{{ news.name }}</router-link -->
        <button @click="goDetail(news)">查看新闻</button>
        <router-link :to="{ name: 'detail', query: news }">{{
          news.name
        }}</router-link>
      </li>

      <li v-for="news in newsList" :key="news.id">
        <!-- <router-link
          :to="`/news/detail?id=${news.id}&name=${news.name}&content=${news.content}`"
          >{{ news.name }}</router-link -->
        <router-link :to="{ name: 'myDetail', params: news }">{{
          news.name
        }}</router-link>
      </li>
    </ul>
    <RouterView />
  </div>
</template>
  
<script setup lang="ts" name="News">
import { RouterView } from "vue-router";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const newsList = reactive([
  { id: 1, name: "新闻001", content: "内容001" },
  { id: 2, name: "新闻002", content: "内容002" },
  { id: 3, name: "新闻003", content: "内容003" },
  { id: 4, name: "新闻004", content: "内容004" },
  { id: 5, name: "新闻005", content: "内容005" },
  { id: 6, name: "新闻006", content: "内容006" },
  { id: 7, name: "新闻007", content: "内容007" },
  { id: 8, name: "新闻008", content: "内容008" },
]);
interface News {
  id: number;
  name: string;
  content: string;
}
function goDetail(news: News) {
  // router.push({
  //   name: "detail",
  //   query: { ...news },
  // });
  router.replace({
    name: "detail",
    query: { ...news },
  });
}
</script>
  
  <style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>