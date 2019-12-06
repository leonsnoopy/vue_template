<template>
  <!-- 登入 -->
  <el-dialog title="管理員登入" :visible="dialogLoginShow" @close="onClose()" :center="true" :modal="false" width="80%">
    <!-- 取消瀏覽器記錄密碼 -->
    <div style="position:absolute;top:-1000px">
      <input type="text" title="Chaff for Chrome Smart Lock" />
      <input type="password" title="Chaff for Chrome Smart Lock" />
    </div>

    <div style="text-align: center;">
      <el-row>
        <el-col :span="4">
          <h5>帳號:</h5>
        </el-col>

        <el-col :span="18" style="margin-top: 12px;">
          <el-input v-model="account" ref="account"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">
          <h5>密碼:</h5>
        </el-col>

        <el-col :span="18" style="margin-top: 12px;">
          <el-input @keypress.enter.native="login()" v-model="password" show-password></el-input>
        </el-col>
      </el-row>

      <el-row style="margin-top: 12px;">
        <el-button type="primary" @click="login()">登入</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogLoginShow: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    onClose() {
      if (this.dialogLoginShow == true) {
        this.$emit("update:dialogLoginShow", false);
      }
    },
    login() {
      if (this.password == "" || this.account == "") {
        this.$message.warning("帳號/密碼不能為空");
        return false;
      }

      axios
        .post("/api/login", { account: this.account, password: this.password })
        // .get("/api/login", { account: this.account, password: this.password }) //測試
        .then(response => {
          this.$store.commit("setRole", "admin");
          this.$router.push("/Admin");
          this.$emit("update:dialogLoginShow", false);
        })
        .catch(error => {
          this.$message.error("帳號/密碼錯誤");
        });
    }
  }
};
</script>

<style scoped>
el-dialog__body {
  text-align: center;
}
</style>
