<!-- src/App.vue -->
<template>
  <div id="app">
    <MainHeader />
    <About />
    <hr class="section-divider">
    <TechSkills />
    <hr class="section-divider">
    <WorkExperience />
    <hr class="section-divider">
    <EducationLevel />
  </div>
</template>

<script>
import MainHeader from './components/Header.vue'
import About from './components/About.vue'
import TechSkills from './components/Skills.vue'
import WorkExperience from './components/Experience.vue'
import EducationLevel from './components/Education.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    About,
    TechSkills,
    WorkExperience,
    EducationLevel
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

<!-- LeetCode widget, pictures, some repos, styling... -->