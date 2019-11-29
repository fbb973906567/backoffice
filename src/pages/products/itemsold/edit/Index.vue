<template>
  <div class="edit">
    <BreadCrumb :linkList="link"/>
    <Info :data='skuInfo'/>
    <Attr :data='salesInfo'/>
  </div>
</template>
<script>
import { getSkuSalesDetail } from "@/axios/server";
import BreadCrumb from "@/components/crumb/Index.vue";
import Info from './Info.vue'
import Attr from './Attr.vue'
export default {
  name: "Index",
  components: {
    BreadCrumb,
    Info,
    Attr
  },
  data() {
    return {
      link: [
        {
          text: "单品销售管理",
          url: "/itemsold"
        },
        {
          text: "某某单品"
         
        }
      ],
      skuInfo: {},
      salesInfo: {
        gradePrice: {
          stepNum: "",
          minBuyNum: "",
          gradePriceList: [
            {
              gradeStartNum: "",
              gradePriceAmt: ""
            }
          ]
        }
      }
    };
  },
  created() {
    console.log(this.$route.query);
    getSkuSalesDetail(this.$route.query).then(({ data }) => {
      const { skuInfo, salesInfo } = data;
      this.skuInfo = skuInfo;
      this.salesInfo = salesInfo;
    });
  }
};
</script>
<style lang="scss" scoped>
</style>


