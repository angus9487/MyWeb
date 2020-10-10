<template>
  <el-row>
    <el-col :span="18">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6">
      <el-menu :default-active="1"
               class="el-menu-demo"
               mode="horizontal"
               background-color="#e5e9f2"
               @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3">订单管理</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import router from "../../router/router";
  export default {
    name: "Header",

    methods: {
      handleSelect(key, keyPath){
        console.log(keyPath)
        if(key === '1'){
          router.push("/test")
        }else {
          router.push("/")
        }
      }
    }
  }
</script>

<style scoped>
  /*.el-row {*/
  /*  margin-bottom: 20px;*/
  /*&:last-child {*/
  /*   margin-bottom: 0;*/
  /* }*/
  /*}*/
  /*.el-col {*/
  /*  border-radius: 4px;*/
  /*}*/
  /*.bg-purple-dark {*/
  /*  background: #99a9bf;*/
  /*}*/
  .bg-purple {
    background: #e5e9f2;
  }

  /*.bg-purple-light {*/
  /*  text-align: center;*/
  /*  background: #e5e9f2;*/
  /*}*/
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }

  /*.row-bg {*/
  /*  padding: 10px 0;*/
  /*  background-color: #f9fafc;*/
  /*}*/
</style>
