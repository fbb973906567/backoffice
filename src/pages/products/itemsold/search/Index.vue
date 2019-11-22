<template>
  <div class="search">
    <el-input v-model="skuText" placeholder="单品编码/单品名称/商品标题" class="skuName"></el-input>
    <div class="threeLevel" v-if="threeLevel">
      <el-select
        v-model="categoryOne"
        placeholder="请选择一级目录"
        class="categoryOne"
        @change="handleChange('first',categoryOne)"
      >
        <el-option v-for="item in level1" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>
      <el-select
        v-model="categoryTwo"
        placeholder="请选择二级目录"
        class="categoryTwo"
        @change="handleChange('second',categoryTwo)"
      >
        <el-option v-for="item in level2" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>
      <el-select
        v-model="categoryThree"
        placeholder="请选择三级目录"
        class="categoryThree"
        @change="handleChange('third',categoryThree)"
      >
        <el-option v-for="item in level3" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>
    </div>
    <el-select v-model="siteCode" placeholder="请选择对应站点" class="siteCode">
      <el-option v-for="item in level1" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary">查询</el-button>
  </div>
</template>
<script>
import { LevelList } from "@/axios/server";
export default {
  name: "Search",
  props: {
    threeLevel: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      skuText: "",
      level1: [],
      level2: [],
      level3: [],
      categoryOne: "",
      categoryTwo: "",
      categoryThree: "",
      siteCode: ""
    };
  },
  created() {
    LevelList().then(({ data }) => {
      this.level1 = data;
    });
  },
  methods: {
    handleChange(type, val) {
      if (type === "first") {
        this.level2 = this.level1.find(x => x.value === val).children;
      } else {
        this.level3 = this.level2.find(x => x.value === val).children;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  .threeLevel {
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


