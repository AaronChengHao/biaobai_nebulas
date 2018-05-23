<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Row>
      <Col>
      <div class="footer">
        基于星云链的表白平台 ©Aaron 2018  <b>特此鸣谢 <Icon type="thumbsup" size="30" color="#E14AEB"></Icon>&nbsp;<a href="https://nebulas.io/cn/index.html">星云链</a> 平台</b>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.footer{
    position: fixed;
    width: 100%;
    color: #FFFEFE;
    bottom: 10px;
    text-align: center;
    padding: 5px;
    font-size: 15px;
}
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
