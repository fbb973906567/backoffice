<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item :key="index" v-for="(todo,index) in linkList">
        <a :href=todo.url :key="index" v-for="(todo,index) in linkList">{{ todo.text }}</a>
      </el-breadcrumb-item>
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
.bread{
  margin-bottom: 10px;
}
</style>


