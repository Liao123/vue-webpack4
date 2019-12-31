<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title || ''"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
body{
  margin: 0px;
  padding: 0px;
}
body,html{
  /* line-height: inherit!important; */
  /* line-height: 100%!important; */

}
/* p{
} */
</style>
