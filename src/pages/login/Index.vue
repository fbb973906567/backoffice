<template>
  <div class="login">
    <div class="content">
      <div class="left">
        <div class="logo">
          <img alt="logo" src="./logo.svg">
        </div>
        <div class="text">
          <span>欢迎来到</span>
          包材平台
        </div>
        <div class="form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <span class="label">用户名</span>
            <el-form-item prop="loginName">
              <el-input v-model="ruleForm.loginName" autocomplete="off"></el-input>
            </el-form-item>
            <span class="label">密码</span>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="subBtn" type="primary" @click="submitForm('ruleForm')" round>提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import { LoginAjax } from "@/axios/server";
import storage from '@/storage.js'
export default {
  name: "HelloWorld",
  data() {
    var validateLoginName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.loginName !== "") {
          // this.$refs.ruleForm.validateField("loginName");
        }
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          // this.$refs.ruleForm.validateField("password");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        loginName: "",
        password: ""
      },
      rules: {
        loginName: [
          { required: true, validator: validateLoginName, trigger: "blur" }
        ],
        password: [
          { required: true, validator: validatePassWord, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let params = this.ruleForm;
      this.$refs[formName].validate(valid => {
        if (valid) {
          LoginAjax(params).then(({data}) => {
            storage.clear();
            storage.setString("accessToken", data.token);
            storage.setString("userData", JSON.stringify(data));
            this.$router.push("/");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created(){
    storage.clear('accessToken')
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: 100%;
  background: url(./bg.jpg) no-repeat #fff;
  background-size: 100% auto;
  overflow: hidden;
  .content {
    width: 900px;
    height: 600px;
    margin: 120px auto 0 auto;
    background: #fff;
    box-shadow: 0 0 16px 0 rgba(0, 4, 85, 0.2);
    border-radius: 12px;
    position: relative;
    display: flex;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      background: url(./s.png) no-repeat;
      width: 406px;
      height: 115px;
    }

    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      background: url(./x.png) no-repeat;
      width: 127px;
      height: 210px;
    }

    .left {
      flex: 1;
      padding: 70px;

      .logo {
        width: 100%;
        height: 60px;
        img {
          width: 90px;
          height: 32px;
        }
      }

      .text {
        font-size: 32px;
        color: #000;
        line-height: 1.5;
        padding: 20px 0;

        span {
          display: block;
          font-size: 16px;
          color: #333;
        }
      }
      .label {
        display: inline-block;
        margin-bottom: 8px;
      }

      .subBtn {
        height: 60px;
        // padding: 0 70px;
        width: 176px;
        border-radius: 60px;
      }
    }

    .right {
      width: 450px;
      height: 680px;
      background: url(./nn.jpg) no-repeat left center;
    }
  }
}
</style>