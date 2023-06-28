<script>
import { getInfor, infoAPI } from "../../utils/user";
export default {
  created() {
    getInfor().then((res) => {
      const oldInfo = res.data.data;
      this.birthday = oldInfo.birthday;
      this.age = oldInfo.age;
      this.avatar = oldInfo.avatar;
      this.area = oldInfo.area;
      this.address = oldInfo.address;
      this.nickName = oldInfo.nickName;
      this.gender = oldInfo.gender;
    });
  },
  data() {
    return {
      birthday: "",
      age: "",
      avatar: "",
      area: "",
      address: "",
      nickName: "",
      gender: "",
    };
  },
  methods: {
    submitEvent() {
      infoAPI({
        birthday: this.birthday,
        age: this.age,
        avatar: this.avatar,
        area: this.area,
        address: this.address,
        nickName: this.nickName,
        gender: this.gender,
      }).then((res) => {
        if (res.data.code == 1) {
          this.$router.push({ name: "user" });
        }
      });
    },
  },
};
</script>

<template>
  <div class="info">
    <van-cell-group inset>
      <van-field v-model="birthday" label="生日" placeholder="请输入生日" />

      <van-field v-model="age" label="年龄" placeholder="请输入年龄" />

      <van-field v-model="avatar" label="头像" placeholder="请输入头像" />

      <van-field
        v-model="area"
        required
        label="楼栋信息"
        placeholder="请输入楼栋信息"
      />

      <van-field
        v-model="address"
        required
        label="详细地址"
        placeholder="请输入详细地址"
      />

      <van-field v-model="nickName" label="昵称" placeholder="请输入昵称" />

      <van-field v-model="gender" label="性别" placeholder="请输入性别" />
    </van-cell-group>

    <van-button block type="danger" @click="submitEvent">提交</van-button>
  </div>
</template>

<style>
.info {
  --van-field-label-color: blue;
}
</style>