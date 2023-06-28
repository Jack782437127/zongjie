<script>
import { regAPI } from "../../utils/user";
import { showFailToast } from "vant";
export default {
  data() {
    return {
      txt: "",
      psw: "",
      rpsw: "",
    };
  },
  methods: {
    reg() {
      if (this.txt && this.psw && this.psw) {
        if (this.psw === this.rpsw) {
          regAPI({ userName: this.txt, password: this.psw }).then((res) => {
            if (res.data.code == 1) {
              console.log(res);
              this.$router.push({ name: "login" });
            }
            if (res.data.code == 0) {
              // console.log(res);
              showFailToast(res.data.data);
            }
          });
        } else {
          showFailToast("两次密码不一致");
        }
      } else {
        showFailToast("请输入账号密码");
      }
    },
  },
};
</script>
<template>
  <div class="reg">
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
      <li>
        <input
          type="password"
          name=""
          placeholder="请重复密码"
          v-model="rpsw"
        />
      </li>
      <input type="button" @click="reg" value="注册" />
    </ul>
    <router-link
      style="color: skyblue; cursor: pointer; display: block; margin-top: 20px"
      :to="{ name: 'login' }"
      >我已有账号，跳转至登录页</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.reg {
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
}
img {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
}
</style>