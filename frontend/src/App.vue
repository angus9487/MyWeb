<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <Main/>
    </el-main>
    <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import Header from './components/baseComp/Header'
  import Main from './components/main/Main'
  import Footer from './components/baseComp/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Main
    },
  }
</script>

<style>
  /*.el-header, .el-footer {*/
  /*  !*background-color: #B3C0D1;*!*/
  /*  !*color: #333;*!*/
  /*  text-align: center;*/
  /*  !*line-height: 60px;*!*/
  /*}*/
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
