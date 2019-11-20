<template>
  <div class="home">
    <el-container class="container">
      <el-aside width="200px">
        <div class="title">真臻鲜包材平台</div>
        <h5>默认颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">单品主档</el-menu-item>
              <el-menu-item index="1-2">SPU商品管理</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="right">
        <el-header><Header/></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/header/Index.vue'
export default {
  name: "Home",
  components:{
    Header
  }
};
</script>
<style lang="scss" scoped>
.home{
  height: 100%;
  .container{
    height: 100%;
    .right{
      background-color: #f6f6f6;
    }
  }
}
</style>