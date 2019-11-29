<template>
  <div class="info">
    <Container>
      <template v-slot:header>
        <strong>单品信息</strong>
      </template>
      <template v-slot:main>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">商品分类</label>
                    <span>{{data.category}}</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">单品名称</label>
                    <span>{{data.skuName}}</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">单品规格</label>
                    <span>{{data.specification}}</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">所属商品SPU</label>
                    <span>{{data.spuName}}</span>
                  </div>
                  <div class="grid-content bg-purple-dark">
                    <label class="label">所属站点</label>
                    <span>{{data.siteName}}</span>
                  </div>
                </el-col>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">销售单位</label>
                    <span>{{data.unitName}}</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">成本价</label>
                    <span>{{data.origPriceAmt}}</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">税率</label>
                    <span>{{data.costPriceAmt}}</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label class="label">含税成本</label>
                    <span>{{data.taxRate}}</span>
                  </div>
                </el-col>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/container/Index.vue";
export default {
  name: "Info",
  components: {
    Container
  },
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  }
};
</script>
<style lang="scss" scoped>
.info{
  margin-bottom: 20px;
  .label{
    display: inline-block;
    width: 150px;
  }
}
</style>


