<template>
  <div class="page">
    <Search @searchClick="searchClick"/>
  </div>
</template>
<script>
import Search from "./search/Index.vue";
export default {
  name: "ItemSold",
  components: {
    Search
  },
  methods: {
    searchClick() {
      console.log("点击了");
    }
  },
  data() {
    return {
      // startTime: "2019-11-01",
      // endTime: "2019-12-31",
      // searchName: "ERP1000593",
      // status: 0,
      // pageNo: 1,
      // pageSize: 10
    };
  }
};
</script>
<style lang="scss" scoped>
</style>


