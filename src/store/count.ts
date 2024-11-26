import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
    actions: {
        increment(n: number) {
            this.count += n;
        },
    },
    state: () => ({
        count: 6,
        time: "dfdf",
    }),
});
