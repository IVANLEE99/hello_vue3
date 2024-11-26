<template>
  <div class="loveTalk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="item in loveTalkStore.talkList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";
import { useLoveTalkStore } from "@/store/loveTalk";
let loveTalkStore = useLoveTalkStore();

// 数据
// let talkList = reactive([
//   { id: "ftrfasdf01", title: "今天你有点怪，哪里怪？怪好看的！" },
//   { id: "ftrfasdf02", title: "草莓、蓝莓、蔓越莓，今天想我了没？" },
//   { id: "ftrfasdf03", title: "心里给你留了一块地，我的死心塌地" },
// ]);
async function getTalk() {
  // let {
  //   data: { content: title },
  // } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json", {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // });
  let arr = [
    "我房租到期了，可以去你心里住吗",
    "我发现昨天很喜欢你，今天也很喜欢你，而且有预感明天也会喜欢你",
    "我最大的缺点，就是缺点你",
    "你知道你和星星的区别吗？星星在天上 你在我心里",
    "我的眼睛一定有问题，我的视线无法自你身上离开。",
    "你今天特别讨厌，讨人喜欢和百看不厌。",
    "最近有谣言说我喜欢你，我要澄清一下那不是谣言",
    "您好，您有新的恋爱订单，请及时收取我",
    "一直想说，无论走到哪里，最想去的是你的身边。",
    "你今天干嘛打扮成这个样子，好看不说，偏偏是我喜欢的样子",
  ];
  let obj = {
    id: nanoid(),
    title: arr[Math.floor(Math.random() * arr.length)],
  };
  // talkList.push(obj);
}
</script>

<style scoped>
.loveTalk {
  margin-top: 20px;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}
</style>
