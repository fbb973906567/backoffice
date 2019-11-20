<template>
  <div class="search">
    <span>同步日期 &nbsp; &nbsp;</span>
    <el-date-picker
      class="timepicker"
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd"
    ></el-date-picker>
    <el-input class="input" v-model="searchName" placeholder="请输入单品编码/名称查询"></el-input>
    <el-select v-model="status" placeholder="请选择" class="select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary" class="searchBtn" @click="goSearch">查询</el-button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Search",
  data() {
    return {
      value1: [],
      options: [
        {
          value: "0",
          label: "未绑定"
        },
        {
          value: "1",
          label: "已绑定"
        }
      ],
      status: "",
      searchName: ""
    };
  },
  methods: {
    goSearch() {
      const { value1 } = this;
      console.log(value1);
      const startTime = value1[0] && moment(value1[0]).format("YYYY-MM-DD");
      const endTime = value1[1] && moment(value1[1]).format("YYYY-MM-DD");
      const { status, searchName } = this;
      const params = {
        startTime,
        endTime,
        status,
        searchName
      };
      this.$emit("searchClick", params);
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  background-color: #fff;
  height: 110px;
  padding-left: 20px;
  // line-height: 110px;
  padding-top: 55px;
  .timepicker {
    width: 276px;
  }
  .input {
    width: 200px;
    margin-left: 20px;
  }
  .select {
    margin-left: 20px;
  }
  .searchBtn {
    margin-left: 20px;
  }
}
</style>


