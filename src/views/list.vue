<script>
import { loadProductAPI, loadCategoriesAPI } from "../../utils/product";
import { loadImg } from "../../utils/tools";

export default {
  data() {
    return {
      active: 0,
      list: [],
      Categories: [],
      loading: false,
      finished: false,
      page: 1,
      category: "",
    };
  },
  methods: {
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

    //加载分类列表
    loadCategoriesData() {
      loadCategoriesAPI().then((res) => {
        this.Categories = res.data.data;
        console.log(this.Categories);
      });
    },

    //列表跳详情
    skip(id) {
      this.$router.push({ name: "detail", params: { id } });
    },

    //分类标签跳转
    fenlei(category) {
      this.page = 1;
      this.list = [];
      this.loading = true;
      this.category = category;
      loadProductAPI({ category: this.category })
        .then((res) => {
          this.loading = false;
          this.page++;
          const data = res.data.data.map((item) => ({
            ...item,
            coverImage: loadImg(item.coverImage),
          }));
          this.list.push(...data);
          // console.log(this.list, this.page);
          this.finished = data.length == 0;
        })
        .catch((e) => console.log(e));
      console.log(this.list);
    },
  },
  created() {
    // this.loadProductData();
    this.loadCategoriesData();
  },
};
</script>
<template>
  <div class="main">
    <!-- 左侧边分类栏 -->
    <div class="tebBar_left">
      <van-sidebar v-model="active">
        <van-sidebar-item @click="fenlei()" title="全部分类" />
        <van-sidebar-item
          @click="fenlei(i.id)"
          v-for="i in Categories"
          :title="i.name"
        />
      </van-sidebar>
    </div>

    <!-- 右侧内容区 -->

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

<style scoped lang="scss">
.main {
  display: flex;
  .tebBar_left {
    position: fixed;
    left: 0;
    top: 38px;
    width: 80px;
  }
  .list {
    a {
      display: block;
      margin-top: 15px;
    }
  }
}

.van-list {
  height: 90vh;
  flex: 1;
  margin-left: 80px;
}
</style>