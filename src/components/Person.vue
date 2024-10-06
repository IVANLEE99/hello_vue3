<!-- Person -->
<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" />
    <br />
    名：<input type="text" v-model="lastName" />
    <br />
    全名：{{ fullName }}
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from "vue";
let firstName = ref("张");
let lastName = ref("三");
let fullName = computed(() => {
  return firstName.value + "-" + lastName.value;
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
