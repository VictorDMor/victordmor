<!-- src/App.vue -->
<template>
  <div id="app">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #192430;
}

body {
    font-family: 'Merriweather Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
}

.section-divider {
  border: 0;
  height: 1px;
  background: #333;
  opacity: 0.2;
  margin: 30px 0;
}
</style>