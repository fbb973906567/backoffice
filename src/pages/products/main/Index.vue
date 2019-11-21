<template>
  <div class="page">
    <BreadCrumb :linkList='link'/>
    <Search @searchClick="searchClick"/>
    <Table @pageChange='pageChange' :tableData='resultData' :totalNum='total'/>
  </div>
</template>
<script>
import Search from "./search/Index.vue";
import Table from "./table/Index.vue";
import {SkuList} from '@/axios/server'
import BreadCrumb from '@/components/crumb/Index.vue'
export default {
  name: "Main",
  components: {
    Search,
    Table,
    BreadCrumb
  },
  methods: {
    searchClick(newParams) {
      const { params } = this;
      Object.assign(params, newParams);
      this.params = params;
      this.requestData()
    },
    pageChange(page){
      const { params } = this;
      params.pageNo=page
      this.params = params;
      this.requestData()
    },
    requestData(){
      const {params} = this
      console.log(params)
      SkuList(params).then(({data})=>{
        this.resultData = data.list
        this.total = data.total
      })
   }
  },
  mounted(){
    this.requestData()
  },
  data() {
    return {
      resultData:[],
      total:undefined,
      params: {
        pageNo: 1,
        pageSize: 10
        // startTime: "2019-11-01",
        // endTime: "2019-12-31",
        // searchName: "ERP1000593",
        // status: 0,
      },
   link:[{
     text:'单品主档',
     url:'/main'
   }]
    };
  }
};
</script>
<style lang="scss" scoped>
.page{
  background-color: #f6f6f6;
}
</style>


