<!-- Person -->
<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>姓名name2：{{ name2 }}</h2>
    
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "Person",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //prop属性
  props: {
    props: {
      type: String,
      default: "",
    },
  },
  data() {
    //这里存放数据
    return {
      //   name: "data:youngs",
      //   age: 18,
      //   tel: "data:13333333",
      name2: this.name,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {
    console.log("beforeCreate");
  }, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  //   //方法集合
  methods: {
    changeName() {
      this.name = "methods:youngs001";
    },
    changeAge() {
      this.age += 1;
    },
    showTel() {
      alert(this.tel);
    },
  },
  setup() {
    console.log("setup"); //1、setup比 beforeCreate更先执行～
    console.log("@@this", this); //2、setup中的this为undefined，vue3中已经弱化this

    //3、数据，原来写在data中，此时name age tel都不是响应式的数据
    let name = "张三";
    let age = 18;
    let tel = "1333";

    function changeName() {
      name = "youngs001";
      console.log(1, name); //4、注意这样修改name，页面是没有变化的
    }
    function changeAge() {
      age += 1;
      console.log(2, age);
    }
    function showTel() {
      alert(tel);
      console.log(3, tel);
    }
    //data method setup 共存已setup为主
    return {
      name,
      age,
      changeName,
      changeAge,
      showTel,
    };
    //setup的返回值也可以是一个渲染函数
    // return () => "哈哈";
  },
};
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
