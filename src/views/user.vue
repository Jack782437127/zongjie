<script>
import { getInfor } from "../../utils/user";
import { loadImg } from "../../utils/tools";
export default {
  data() {
    return {
      info: {},
    };
  },
  created() {
    getInfor().then((res) => {
      const info = res.data.data;
      this.info = info;
      // console.log(this.info);
      // console.log(res);
      if (info.nickName) {
        this.nickName = info.name;
      } else {
        this.nickName = info.userName;
        console.log(info.name);
      }
    });
  },
  methods: {
    infoChange() {
      this.$router.push({ name: "info" });
    },
    logout() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<template>
  <div class="user">
    <div id="touxiang">
      <img :src="this.info.avatar" alt="" />
    </div>
    <p>{{ info.nickName }}</p>
    <p id="jifen">
      积分<span>{{ info.score }}</span>
    </p>
    <van-cell title="我的订单" is-link />
    <van-cell title="我的订单" is-link />
    <van-cell title="我的订单" is-link />
    <van-cell title="我的订单" is-link />
    <van-cell title="修改个人信息" @click="infoChange" is-link />
    <van-button type="danger" @click="logout">退出登录</van-button>
  </div>
</template>

<style lang="scss" scoped>
.user {
  overflow: auto;
  #touxiang {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;
    margin: 30px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    width: 100vw;
    font-size: 5vw;
    text-align: center;
    margin: 12px auto;
  }
  #jifen {
    width: 100vw;
    font-size: 4vw;
    height: 15vw;
    text-align: center;
    span {
      color: rgb(38, 0, 255);
    }
  }
  button {
    display: block;
    width: 80vw;
    margin: 30px auto;
  }
  --van-cell-line-height: 40px;
}
</style>