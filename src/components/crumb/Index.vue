<template>
  <div class="bread">
      <el-breadcrumb separator="/">
              <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
              <el-breadcrumb-item
                :to="{ path: items.url }"
                v-for="(items,index) in linkList"
                :key="index"
              >{{items.text}}</el-breadcrumb-item>
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


