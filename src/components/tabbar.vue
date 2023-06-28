<script>
export default {};
</script>

<template>
  <div class="tabbar">
    <div>
      <router-link :to="{ name: 'home', query: { a: '首页' } }"
        >首页</router-link
      >
      <router-link
        @click="title = '列表'"
        :to="{ name: 'list', query: { a: '列表' } }"
        >列表</router-link
      >
      <router-link
        @click="title = '购物车'"
        :to="{ name: 'cart', query: { a: '购物车' } }"
        >购物车</router-link
      >
      <router-link
        @click="title = '我的'"
        :to="{ name: 'user', query: { a: '我的' } }"
        >我的</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  height: 100%;
  div {
    height: 100%;
    box-shadow: 0 -2px skyblue;
    display: flex;
    align-items: center;
    a {
      flex: 1;
      text-align: center;
    }
  }
}
</style>