import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

// export const useLoveTalkStore = defineStore("loveTalk", {
//     actions: {
//         async getTalk() {
//             let arr = [
//                 "我房租到期了，可以去你心里住吗",
//                 "我发现昨天很喜欢你，今天也很喜欢你，而且有预感明天也会喜欢你",
//                 "我最大的缺点，就是缺点你",
//                 "你知道你和星星的区别吗？星星在天上 你在我心里",
//                 "我的眼睛一定有问题，我的视线无法自你身上离开。",
//                 "你今天特别讨厌，讨人喜欢和百看不厌。",
//                 "最近有谣言说我喜欢你，我要澄清一下那不是谣言",
//                 "您好，您有新的恋爱订单，请及时收取我",
//                 "一直想说，无论走到哪里，最想去的是你的身边。",
//                 "你今天干嘛打扮成这个样子，好看不说，偏偏是我喜欢的样子",
//             ];
//             let obj = {
//                 id: nanoid(),
//                 title: arr[Math.floor(Math.random() * arr.length)],
//             };
//             this.talkList.push(obj);
//         }
//     },
//     state: () => ({
//         talkList: localStorage.getItem("talkList") ? JSON.parse(localStorage.getItem("talkList") || "[]") : []
//     }),
// });


export const useLoveTalkStore = defineStore("loveTalk", () => {
    const talkList = reactive(localStorage.getItem("talkList") ? JSON.parse(localStorage.getItem("talkList") || "[]") : [])
    function getTalk() {
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
        ]
        let obj = {
            id: nanoid(),
            title: arr[Math.floor(Math.random() * arr.length)],
        };
        talkList.push(obj);
    }
    return {
        talkList,
        getTalk
    }
});