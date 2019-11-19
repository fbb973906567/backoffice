<template>
  <div class="header">
    <div class="dev">[dev环境]</div>
    <div class="editPwd">
      <EditPwd/>
    </div>
    <div class="logout">
      <i class="el-icon-s-unfold"></i>退出
    </div>
    <div class="user">
      <i class="el-icon-user"></i>fanhaipeng
    </div>
  </div>
</template>
<script>
import EditPwd from "@/components/header/editPwd/Index.vue";
export default {
  name: "Header",
  components: {
    EditPwd
  }
};
</script>
<style lang="scss" scoped>
.header {
  // height: 64px;
  // line-height: 64px;
  .dev,
  .user,
  .logout {
    display: inline-block;
    height: 65px;
    line-height: 65px;
    margin-right: 20px;
  }
  .editPwd {
    display: inline-block;
  }
  .logout,
  .user,
  .editPwd {
    float: right;
  }
  .editPwd {
    margin-top: 12px;
  }
}
</style>