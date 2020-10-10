<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <el-image
      :src='url'/>
  </div>
</template>

<script>
  import {nginxUrl} from "../../utils/nginxRequest";

  export default {
    name: 'TestPage',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        url: nginxUrl + '/images/opendj_logo.png'
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-weight: normal;
  }

</style>
