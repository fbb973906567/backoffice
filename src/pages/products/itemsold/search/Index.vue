<template>
  <div class="search">
    <span>同步日期</span>
    <el-date-picker
      class="timepicker"
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd"
    ></el-date-picker>
    <el-input class="input" v-model="input" placeholder="请输入单品编码/名称查询"></el-input>
    <el-select v-model="value" placeholder="请选择" class="select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary" class="search" @click="goSearch">查询</el-button>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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
      value: "0",
      input: ""
    };
  },
  methods: {
    goSearch() {
      const params = {
        value1: this.value1
      };
      console.log(params)
      this.$emit("searchClick");
    }
  }
};
</script>
<style lang="scss" scoped>
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
.search {
  margin-left: 20px;
}
</style>


