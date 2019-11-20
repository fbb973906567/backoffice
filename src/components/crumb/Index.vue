<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item
        :key="index"
        :to="{ path: '/' }"
        v-for="(todo,index) in todos"
      >{{ todo.text }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: {
    linkList: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
</style>


