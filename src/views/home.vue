<script>
import { loadCategoriesAPI, loadProductAPI } from "../../utils/product";
import { loadImg } from "../../utils/tools";
export default {
  data() {
    return {
      list: [],
      Category: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  methods: {
    skip(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
    loadProductData(page) {
      this.loading = true;
      this.page++;
      loadProductAPI({ page, category: this.category })
        .then((res) => {
          this.loading = false;
          const data = res.data.data.map((item) => ({
            ...item,
            coverImage: loadImg(item.coverImage),
          }));
          this.list.push(...data);
          // console.log(this.list, this.page);
          this.finished = data.length == 0;
        })
        .catch((e) => console.log(e));
    },

    //加载商品列表
    loadProductData(page) {
      this.loading = true;
      this.page++;
      loadProductAPI({ page, category: this.category })
        .then((res) => {
          this.loading = false;
          const data = res.data.data.map((item) => ({
            ...item,
            coverImage: loadImg(item.coverImage),
          }));
          this.list.push(...data);
          // console.log(this.list, this.page);
          this.finished = data.length == 0;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    loadCategoriesAPI().then((res) => {
      this.Category = res.data.data.map((item) => ({
        ...item,
        coverImage: loadImg(item.coverImage),
      }));
      // console.log(this.Category);
    });
  },
};
</script>
<template>
  <div class="home">
    <van-grid :column-num="4">
      <van-grid-item
        v-for="value in this.Category"
        :key="value"
        :icon="value.coverImage"
        :text="value.name"
        @click="skip(value.id)"
      />
    </van-grid>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadProductData(this.page)"
    >
      <van-card
        @click="skip(item.id)"
        v-for="item in list"
        :num="item.amount"
        :price="item.price.toFixed(2)"
        :desc="item.desc"
        :title="item.name"
        :thumb="item.coverImage"
      />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  .van-list {
    flex: 1;
    overflow: auto;
  }
}
</style>