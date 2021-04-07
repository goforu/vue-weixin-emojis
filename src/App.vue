<template>
  <div id="app">
    <EmojiPicker />
  </div>
</template>

<script>
import EmojiPicker from './components/EmojiPicker.vue'

export default {
  name: 'App',
  components: {
    EmojiPicker
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
