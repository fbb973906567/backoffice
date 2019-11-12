<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">Aside</el-aside>

      <el-container>
        <el-header>Header</el-header>

        <el-main>
             <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HelloWorld"
};
</script>
<style lang="stylus" scoped>
</style>