<template>
  <div class="attr">
    <Container>
      <template v-slot:header>
        <strong>销售信息配置</strong>
      </template>
      <template v-slot:main>
        <div class="config">
          <div class="startPrice">
            <span class="label">单价设置</span>
            <span class="unitPrice">
              <span>起始单价</span>
              <span>
                <el-input-number
                class="start"
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="99999999"
                  label="描述文字"
                ></el-input-number>
              </span>
              元
            </span>
          </div>
        </div>
      </template>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/container/Index.vue";
export default {
  name: "Attr",
  components: {
    Container
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      num: 1
    };
  },
  created() {
    console.log(this.data);
  },
  methods: {
    handleChange: () => {
      console.log(222);
    }
  }
};
</script>
<style lang="scss" scoped>
.attr {
  .config {
    height: 60px;
    line-height: 60px;
    .startPrice {
      display: flex;
      justify-content: center;
      align-items: center;
      .label {
        flex: 3;
        padding-right: 40px;
        text-align: right;
      }
      .unitPrice {
        flex: 8;
        .start{
          margin: 0 20px;
        }
      }
    }
  }
}
</style>


