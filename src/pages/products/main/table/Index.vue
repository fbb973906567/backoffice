<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="skuCode" label="单品编码" align="center"></el-table-column>
      <el-table-column prop="skuName" label="单品名称" align="center"></el-table-column>
      <el-table-column prop="unitName" label="销售单位" align="center"></el-table-column>
      <el-table-column prop="packageSpec" label="包装规格" align="center"></el-table-column>
      <el-table-column prop="syncTime" label="同步时间" :formatter="formatterTime" align="center"></el-table-column>
      <el-table-column prop="bindingState" label="单品状态" :formatter="formatterStatue" align="center"></el-table-column>
    </el-table>
    <el-pagination
      class="pag"
      background=""
      layout="prev, pager, next"
      :total="totalNum"
      :page-size="10"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Table",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    totalNum:{
       type: Number
    }
  },
  data() {
    return {
      // tableData: this.resultData
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
    },
    indexMethod(index) {
      return index;
    },
    formatterTime(time){
      return moment(time.syncTime).format("YYYY-MM-DD");
    },
    formatterStatue(status){
      console.log(status.bindingState)
      return status.bindingState===0?'未绑定':'已绑定'
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  margin-top: 30px;
  .pag {
    margin-top: 20px;
  }
}
.pag.el-pagination.is-background {
  text-align: right !important;
}
</style>


