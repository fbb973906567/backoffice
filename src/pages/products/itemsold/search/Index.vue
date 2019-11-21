<template>
  <div class="search">
    <el-input v-model="skuText" placeholder="单品编码/单品名称/商品标题" class="skuName"></el-input>
    <div class="threeLevel" v-if="threeLevel">
      <el-select v-model="categoryOne" placeholder="请选择一级目录" class="categoryOne">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="categoryTwo" placeholder="请选择二级目录" class="categoryTwo">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="categoryThree" placeholder="请选择三级目录" class="categoryThree">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <el-select v-model="siteCode" placeholder="请选择对应站点" class="siteCode">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary">查询</el-button>
  </div>
</template>
<script>
export default {
  name: "Search",
  props: {
    threeLevel:{
    type: Boolean,
    default: () => true
    }
  },
  data() {
    return {
      skuText: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      categoryOne: "",
      categoryTwo: "",
      categoryThree: "",
      siteCode: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.search {
  .threeLevel{
    display: inline-block;
  }
  .skuName {
    width: 168px;
    margin-right: 10px;
  }
  .categoryOne,
  .categoryTwo,
  .categoryThree,
  .siteCode {
    width: 130px;
    margin-right: 10px;
  }
}
</style>


