<template>
  <div class="itemsold">
    <BreadCrumb :linkList="link"/>
    <div class="head">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="在线单品管理" name="1">
        </el-tab-pane>
        <el-tab-pane label="待售单品管理" name="0">
        </el-tab-pane>
        <el-tab-pane label="待完善新品" name="99">
        </el-tab-pane>
        <el-tab-pane label="问题单品" name="100">
        </el-tab-pane>
      </el-tabs>
      <Search :threeLevel='flag'/>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "@/components/crumb/Index.vue";
import Search from "./search/Index.vue";
export default {
  name: "ItemSold",
  components: {
    BreadCrumb,
    Search
  },
  data() {
    return {
      flag: '',
      link: [
        {
          text: "单品销售管理",
          url: "/itemsold"
        }
      ],
      activeName: "1"
    };
  },
  methods: {
    handleClick(e){
      if (e.name === '100') {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.itemsold {
  .head {
    background: #fff;
    padding: 20px;
  }
}
</style>


