<template>
  <div class="info">
    <Container>
      <template v-slot:header>
        <strong>Here might be a page title</strong>
      </template>
      <template v-slot:main>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <label>商品分类</label>
                    <span>这是一个商品分类</span>
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
  }
};
</script>
<style lang="scss" scoped>
</style>


