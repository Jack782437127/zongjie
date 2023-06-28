<script>
import tabbar from "./components/tabbar.vue";
import navbar from "./components/navbar.vue";
export default {
  components: { tabbar, navbar },
};
</script>

<template>
  <div class="container">
    <div class="head">
      <navbar></navbar>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="foot">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .head {
    text-align: center;
  }
  .main {
    flex: 1;
    overflow: auto;
    div {
      // margin-top: 2vh;
      height: 100%;
    }
  }
  .foot {
    height: 5vh;
    display: flex;
    flex-direction: column;
  }
}
</style>