<script>
import { loginAPI } from "../../utils/user";
import { showFailToast } from "vant";
import { setToken } from "../../utils/tools";
setToken;
export default {
  data() {
    return {
      txt: "",
      psw: "",
    };
  },
  methods: {
    login() {
      if (this.txt && this.psw) {
        loginAPI({ userName: this.txt, password: this.psw }).then((res) => {
          if (res.data.code == 1) {
            setToken(res.data.data);
            this.$router.push({ name: "user" });
          } else {
            showFailToast(res.data.data);
          }
        });
      } else {
        showFailToast("请输入账号密码");
      }
    },
  },
};
</script>
<template>
  <div class="login">
    <img
      src="https://hbimg.b0.upaiyun.com/9788040ec1ac06fd6447fe8873eb4f050d22bea9ea78-g0BZIT_fw658"
      alt=""
    />
    <ul>
      <li>
        <input type="text" name="" placeholder="请输入账号" v-model="txt" />
      </li>
      <li>
        <input type="password" name="" placeholder="请输入密码" v-model="psw" />
      </li>
      <input type="button" @click="login" value="登录" />
    </ul>
    <router-link style="color: skyblue; cursor: pointer" :to="{ name: 'reg' }"
      >我还没有账号，现在去注册</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 90vw;
  text-align: center;
  li {
    margin: 10px;
  }
  input[type="button"] {
    width: 64px;
    height: 32px;
    border: none;
    background-color: deeppink;
    color: #fff;
  }
  img {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
  }
}
</style>