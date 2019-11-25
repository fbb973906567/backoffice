<template>
  <div class="container">
    <el-container>
      <el-header class="header">
        <slot name="header"></slot>
      </el-header>
      <el-main class="main">
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Container",
  props: {
    title: {
      type: String,
      default: () => "11"
    }
  }
};
</script>
<style lang="scss" scoped>
.container{
  background-color: #fff;
  .header{
    height: 47px;
    line-height: 47px;
    background: #F4F9FF;
  }
  .main{
    // overflow: hidden;
  }
}
</style>


