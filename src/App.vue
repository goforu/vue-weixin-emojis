<template>
  <div id="app">
    <demo />
  </div>
</template>

<script>
import Demo from './pages/Demo.vue'

export default {
  name: 'App',
  components: {
    Demo
  }
}
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
@import './css/app.scss'
</style>
