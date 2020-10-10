<template>
  <div id="app">
<!--    <img src="../../../src/assets/img/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from "./HelloWorld";
  import TestPage from "./TestPage";

  export default {
    name: "Main",
    comments: {
      HelloWorld,
      TestPage
    }
  }
</script>

<style scoped>

</style>
