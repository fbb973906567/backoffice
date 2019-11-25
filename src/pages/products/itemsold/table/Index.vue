<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
      <el-table-column prop="skuCode" label="单品编码" width="110" align="center"></el-table-column>
      <el-table-column prop="skuName" label="单品名称" width="150" align="center"></el-table-column>
      <el-table-column prop="spuTitle" label="所属商品标题" width="180" align="center"></el-table-column>
      <el-table-column prop="category" label="类目" width="180" align="center"></el-table-column>
      <el-table-column prop="siteName" label="站点名称" width="180" align="center"></el-table-column>
      <el-table-column prop="minBuyNum" label="商品起订量" width="100" align="center"></el-table-column>
      <el-table-column
        prop="gmtModifiedDate"
        label="最后修改时间"
        :formatter="formatterTime"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column label="状态" :formatter="formatterStatus" width="180" align="center"></el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.sellStatusCd===1">
            <el-button type="success" @click="goUp(scope.row.siteCode,scope.row.skuCode)">下架</el-button>
            <el-divider direction="vertical"/>
            <el-button type="success" @click="goEdit(scope.row)">编辑</el-button>
          </div>
          <div v-if="scope.row.sellStatusCd===0">
            <el-button type="success" @click="goDown(scope.row.siteCode,scope.row.skuCode)">上架</el-button>
            <el-divider direction="vertical"/>
            <el-button type="success">编辑</el-button>
          </div>
          <div v-if="scope.row.sellStatusCd===99">
            <el-button type="success">编辑</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background=""
      @current-change="handleSizeChange"
      layout="prev, pager, next"
      :total="totalNum"
    ></el-pagination>
  </div>
</template>
<script>
import moment from "moment";
import { skuSoldOut, skuPutAway } from "@/axios/server";
export default {
  name: "Table",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    totalNum: {
      type: Number
    },
    threeLevel: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pageChange", val);
    },
    formatterTime(time) {
      return moment(time.syncTime).format("YYYY-MM-DD");
    },
    formatterStatus(store) {
      const status = store.sellStatusCd;
      if (status === 1) {
        return "已上架";
      } else if (status === 0) {
        return "已下架";
      } else if (status === 99) {
        return "待完善";
      }
    },
    goUp(siteCode, skuCode) {
      skuSoldOut({ params: [{ siteCode, skuCode }] }).then(() => {
        this.$emit("refresh");
      });
    },
    goDown(siteCode, skuCode) {
      skuPutAway({ params: [{ siteCode, skuCode }] }).then(() => {
        this.$emit("refresh");
      });
    },
    goEdit(item){
      const {skuCode,siteCode} = item
      console.log(skuCode)
      console.log(siteCode)
       this.$router.push({ path: '/itemsold/edit', query: { skuCode,siteCode }})
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  margin-top: 20px;
}
</style>

