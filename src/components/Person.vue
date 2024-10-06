<!-- Person -->
<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" />
    <br />
    名：<input type="text" v-model="lastName" />
    <br />
    全名：{{ fullName }}
    <br />
    <button @click="changeFullName">修改为wang-wu</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from "vue";
let firstName = ref("张");
let lastName = ref("三");
// let fullName = computed(() => {
//   return firstName.value + "-" + lastName.value;
// });
let fullName = computed({
  get() {
    return firstName.value + "-" + lastName.value;
  },
  set(val) {
    console.log(val);
    let [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});
function changeFullName() {
  console.log("changeFullName");
  fullName.value = "wang-wu";
}
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
