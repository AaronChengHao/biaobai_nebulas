<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  /*margin-top: 60px;*/
  min-height: 100vh;
  padding-top: 50px;
  /*background-color: red;*/
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526906702408&di=475d62e53484b6eb09df5b49ef47178d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F00%2F30%2F98B58PICR3X.jpg');
}

</style>
