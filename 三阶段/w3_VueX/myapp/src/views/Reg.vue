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
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="success" @click="submitForm">免费注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "Reg",
  data() {
      const checkUsername = (rule, value, callback)=>{
          // {data,header,...}
          this.$request.get('/user/check',{
            username:value
          }).then(({data})=>{
              if(data.code === 400){
                  callback(new Error('用户名已存在'))
              }else if(data.code === 200){
                  callback();
              }
          })
      }
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "用户名长度必须在 3 到 20 个字符之间",
            trigger: "blur",
          },
           { validator: checkUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "密码长度必须在 6 到 30 个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        // 对整个表单进行校验，所有表单元素都校验通过，valid为true，否则为false
        if (valid) {
          // 发起ajax请求
          const {username,password} = this.ruleForm;
          console.log('username',username,password)
          const {data} = await this.$request.post('/user/reg',{
              username,
              password
          })
            //   axios({
            //       method:'post'
            //   })
            if(data.code === 200){
                this.$router.replace('/login');
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