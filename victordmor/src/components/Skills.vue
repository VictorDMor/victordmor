<template>
    <section>
      <h2>Technical Skills</h2>
      <div v-for="(skills, category) in skillSet" :key="category">
        <h3>{{ category }}</h3>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </section>
</template>
  
<script>
  export default {
    name: 'TechSkills',
    data() {
      return {
        skillSet: {
          'Programming Languages': ['Python', 'Node', 'Java', 'JavaScript', 'Shell', 'Terraform'],
          'Frameworks': ['Django', 'Express', 'JQuery'],
          'Libraries': ['Django REST Framework', 'PySpark', 'TensorFlow'],
          'Databases': ['PostgreSQL', 'MySQL', 'ElasticSearch'],
          'Cloud': ['Google Cloud Platform', 'AWS', 'Kubernetes']
        }
      }
    }
  }
</script>
  
<style scoped>
  section {
    margin: 20px auto;
    max-width: 800px;
    text-align: left;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  h3 {
    color: #666;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
</style>