<script>
import { loadProductByIdAPI } from "../../utils/product";

export default {
  data() {
    return {
      detail: "",
      main_url: [],
    };
  },
  mounted() {
    loadProductByIdAPI(this.$route.params.id).then((res) => {
      const data = res.data.data;
      // console.log(data, this.$route.params.id);
      this.detail = data;

      this.main_url = data.content;
    });
  },
};
</script>
<template>
  <div class="detail">
    <h2>{{ this.detail.name }}</h2>
    <div v-html="this.main_url"></div>

    <!-- 轮播图 -->
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in this.banner_url"
        ><img :src="item" alt=""
      /></van-swipe-item>
    </van-swipe> -->
    <!-- <p>parmas传参{{ $route.params.id }}</p>
    <p>search传参,query中的参数{{ $route.query }}</p> -->
  </div>
</template>

<style scoped>
/* 轮播图 */
/* .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
} */
</style>