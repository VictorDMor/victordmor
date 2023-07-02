<!-- src/App.vue -->
<template>
  <div id="app">
    <MainHeader />
    <About />
    <TechSkills />
    <WorkExperience />
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
  color: #2c3e50;
}
</style>

<!-- LeetCode widget, pictures, some repos, styling... -->