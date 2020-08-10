<template>
  <div class="Login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <h1><i class="el-icon-apple"></i> vuexms登陆</h1>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >登陆</el-button
        >
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let reg = /^[\w_-]{6,12}$/;
    var validateNewPwd = (rule, value, callback) => {
      if (!reg.test(value)) {
        callback(new Error("密码应是6-12位数字、字母或-_"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { validator: validateNewPwd, trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let that = this;
          this.$axios
            // .post("/api/checklogin", this.loginForm)
            .post("/api/checklogin", {
              username: that.loginForm.username,
              password: that.loginForm.password
            })
            .then(res => {
              console.log("接受服务端的请求数据", res.data[0]);
              that.$store.commit("SAVE_USERINFO", res.data[0]);
              this.$message.success('登陆成功');
              that.$router.push('/');
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-form {
  border: 1px solid #000;
  width: 400px;
  border-radius: 4px;
  padding: 50px 45px 10px 10px;
  h1 {
    text-align: center;
  }
}
</style>
