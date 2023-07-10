import { createRouter } from 'vue-router'
import About from './components/About.vue'
import TechSkills from './components/Skills.vue'
import WorkExperience from './components/Experience.vue'
import EducationLevel from './components/Education.vue'
import PersonalProjects from './components/Projects.vue'
import NunuNutella from './components/Nutella.vue'

const routes = [
    { path: '/', redirect: '/about' },
    { path: '/about', component: About },
    { path: '/skills', component: TechSkills },
    { path: '/experience', component: WorkExperience },
    { path: '/education', component: EducationLevel },
    { path: '/projects', component: PersonalProjects },
    { path: '/nutella', component: NunuNutella },
]

const router = createRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/victordmor/' : '/',
  routes, // short for `routes: routes`
})

export default router