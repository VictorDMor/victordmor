<template>
    <section>
      <h2>Education</h2>
      <div v-for="(education, index) in educationData" :key="index">
        <h3>{{ education.degree }}</h3>
        <h4>{{ education.institution }}</h4>
        <p>{{ education.date }}</p>
      </div>
    </section>
</template>
  
<script>
  export default {
    name: 'EducationLevel',
    data() {
      return {
        educationData: [
          {
            degree: 'Bachelor of Engineering in Computer Engineering',
            institution: 'Centro Federal de Educação Tecnológica de Minas Gerais, Belo Horizonte, Brazil',
            date: 'Nov 2012 – Set 2021'
          },
          {
            degree: 'Technical High School in Informatics and Information Technology',
            institution: 'Colégio COTEMIG, Belo Horizonte, Brazil',
            date: 'Feb 2009 – Dec 2011'
          }
        ]
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
  
  h3, h4 {
    color: #666;
  }
  
  p {
    margin-bottom: 20px;
    color: #666;
  }
</style>