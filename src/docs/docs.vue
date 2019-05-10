
<template>
  <el-container>
    <el-container>
      <el-main>
        <el-form>
          
            <el-mask :mask="'(##) #####-####'" v-model="mask"></el-mask>
            <el-money v-model="money"></el-money>
            <el-money v-model="money">
                <template slot="prepend">$</template>
            </el-money>

        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import ElMask from '../components/el-mask/component'
  import ElMoney from '../components/el-money/component'

  export default {
    components: { ElMask, ElMoney },
    data() {
      return {
        mask: '',
        money: 0
      }
    }
  };
</script>