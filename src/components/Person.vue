<!-- Person -->
<template>
  <div class="person">
    {{ a }}
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
import { defineProps, withDefaults } from "vue";
import type { Persons } from "@/types";
// 只接受list
// defineProps(['list']);

// 接受list+限制类型
// defineProps<{
//   list: Persons;
// }>();

// 接受list+限制类型+限制必要性+指定默认值
withDefaults(
  defineProps<{
    list?: Persons;
    a?: string;
  }>(),
  {
    list: () => [{ id: "1", name: "default", age: 18 }],
    a: "a default",
  }
);
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
