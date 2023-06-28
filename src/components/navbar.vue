<script>
export default {
  methods: {
    onClickLeft() {
      history.back();
    },
    onClickRight() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<template>
  <van-nav-bar
    :title="this.$route.query.a"
    left-text="返回"
    right-text="首页"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>