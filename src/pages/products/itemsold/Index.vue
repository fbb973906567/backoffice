<template>
  <div class="itemsold">
    <BreadCrumb :linkList="link"/>
    <div class="head">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="在线单品管理" name="1"></el-tab-pane>
        <el-tab-pane label="待售单品管理" name="0"></el-tab-pane>
        <el-tab-pane label="待完善新品" name="99"></el-tab-pane>
        <el-tab-pane label="问题单品" name="100"></el-tab-pane>
      </el-tabs>
      <Search :threeLevel="flag" @gosearch="search"/>
      <Table :threeLevel="flag"  :tableData='list' :totalNum='total' @pageChange='change' @refresh='requestData'/>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "@/components/crumb/Index.vue";
import Search from "./search/Index.vue";
import {SalesList} from '@/axios/server'
import Table from './table/Index.vue'
export default {
  name: "ItemSold",
  components: {
    BreadCrumb,
    Search,
    Table
  },
  data() {
    return {
      flag: "",
      list:[],
      total:0,
      link: [
        {
          text: "单品销售管理",
          url: "/itemsold"
        }
      ],
      activeName: "1",
      params: {
        skuText: "",
        categoryOne: "",
        categoryTwo: "",
        categoryThree: "",
        siteCode: "",
        pageNo: 1,
        pageSize: 10,
        sellStatusCd: 1
        // categoryOne: "1b3602534fcf39b69da6cef369881c35"
        // categoryThere: "2f3ffc8fa14031e593103177da0de13d"
        // categoryTwo: "af64ac38444c3476823ecf23bc62b000"
        // pageNo: 1
        // pageSize: 10
        // sellStatusCd: 1
        // siteCode: "49707888"
      }
    };
  },
  methods: {
    handleClick(e) {
      this.params.sellStatusCd = e.name;
      if (e.name === "100") {
        this.flag = false;
      } else {
        this.flag = true;
      }
      this.requestData()
    },
    search(params) {
      const par = this.params
      Object.assign(par,params)
      this.params = par
      SalesList(par).then(({data})=>{
        console.log(data)
        this.list=data.list
        this.total = data.total
      })
    },
      requestData(){
      const par = this.params;
      SalesList(par).then(({data})=>{
        console.log(data)
        this.list=data.list
        this.total = data.total
      })
    },
    change(val){
      this.params.pageNo=val
      this.requestData()
    }
  },
 mounted(){
    this.requestData()
  }
};
</script>
<style lang="scss" scoped>
.itemsold {
  .head {
    background: #f6f6f6;
    padding: 20px;
  }
}
</style>


