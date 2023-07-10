<template>
  <section id="skills">
    <h2>Technical Skills</h2>
    <ul>
      <li v-for="(skills, category) in skillSet" :key="category">
        <strong>{{ category }}: </strong>{{ skills.join(', ') }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TechnicalSkills',
  data() {
    return {
      skillSet: {
        'Programming Languages': ['Python', 'Node', 'Java', 'JavaScript', 'Shell', 'Terraform'],
        'Databases': ['PostgreSQL', 'MySQL', 'ElasticSearch'],
        'Frameworks & Libraries': ['Django', 'Express', 'JQuery', 'Django REST Framework', 'PySpark', 'TensorFlow'],
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

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}
</style>