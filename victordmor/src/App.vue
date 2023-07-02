<!-- src/App.vue -->
<template>
  <div id="app">
    <MainHeader />
  </div>
</template>

<script>
import MainHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>