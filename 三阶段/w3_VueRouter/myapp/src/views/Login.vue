<template>
  <!-- 父组件调用子组件的方法 -->
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    size="medium"
  >
    <el-form-item label="用户名" prop="username" :error="errorMsg">
      <el-input type="text" v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" :error="errorMsg">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item prop="mdl">
      <el-checkbox label="7天免登录" v-model="ruleForm.mdl"></el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true,
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      errorMsg: "",
    };
  },
  // 监听
  // 可以监听组件实例下的所有属性（包括属性的子属性）
  // 当监听的属性被修改时，执行相应的函数
  watch: {
    "ruleForm.username": function (newVal, oldVal) {
      if (this.errorMsg != "") {
        this.errorMsg = "";
      }
    },
    "ruleForm.password": function (newVal, oldVal) {
      if (this.errorMsg != "") {
        this.errorMsg = "";
      }
    },
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        // 对整个表单进行校验，所有表单元素都校验通过，valid为true，否则为false
        if (valid) {
          // 发起ajax请求
          const { username, password, mdl } = this.ruleForm;
          console.log("username", username, password);
          // const {data} = await this.$request.get('/user/login',{
          //     params:{
          //         username,
          //         password,
          //         mdl
          //     }
          // })
          const { data } = await this.$request.get("/user/login", {
            username,
            password,
            mdl,
          });
          if (data.code === 200) {
            this.$router.replace("/mine");
          } else if (data.code === 401) {
            // this.$message({
            //     type:'error',
            //     message:'用户名或密码错误'
            // })
            this.errorMsg = "用户名或密码错误";
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>