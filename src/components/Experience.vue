<!-- src/components/Experience.vue -->
<template>
  <section id="experience">
    <h2>Experience</h2>
    <div class="job" v-for="(job, index) in jobs" :key="index">
      <h3>{{ job.role }}</h3>
      <p><a :href="job.url" target="_blank">{{ job.company }}</a></p>
      <p>{{ job.period }}</p>
      <div class="tasks">
        <p v-for="(task, index) in job.tasks" :key="index">
          <i class="fas fa-chevron-right task-icon"></i>
          {{ task }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkExperience',
  data() {
    return {
      jobs: [
        // All your job experience with links to the company website
        {
          role: 'Sr. Backend Engineer',
          company: 'Andela',
          url: 'https://andela.com',
          period: 'Jun 2022 - Present',
          tasks: [
            'Initiated, developed, and currently maintaining a Python/Django REST application that drives a critical website application used by the business.',
            'Migrated big volumes of data from Salesforce to the new application using a housemade Salesforce ETL solution'
          ]
        },
        {
          role: 'Sr. Backend Engineer',
          company: 'Andela - Contractor from Holonic',
          url: 'https://andela.com',
          period: 'Jun 2021 – Jun 2022',
          tasks: [
            'Assigned as a contractor to Andela in a team responsible to design and plan their new platform.',
            'Created a business MVP with a team of multi-disciplinary people using Python/Django on the backend, and React on the frontend.'
          ]
        },
        {
          role: 'Mid-Level DevOps Engineer',
          company: 'Kohl’s - Contractor from CI&T',
          url: 'https://www.kohls.com',
          period: 'Dec 2020 – Jul 2021',
          tasks: [
            'Created a new code and pipelines production deployment plan for Kohl’s Merchandising team.',
            'Migrated the Merchandising team’s entire code repository migration from GitHub to GitLab.'
          ]
        },
        {
          role: 'Mid-Level Data Engineer',
          company: 'Inter',
          url: 'https://www.bancointer.com.br',
          period: 'Jun 2020 – Dec 2020',
          tasks: [
            'Built data streams and pipelines using Python, Spark, SQL, and NiFi to feed reports and studies created by the bank’s data scientists that direct the Marketing and Sales decision-making process.'
          ]
        },
        {
          role: 'Jr. DevOps Engineer',
          company: 'Major League Baseball - Contractor from CI&T',
          url: 'https://www.mlb.com',
          period: 'Nov 2019 - Jun 2020',
          tasks: [
            'Outsourced to the client to develop and support their entire cloud infrastructure migration from AWS to Google Cloud Platform.',
            'Created tailored solutions using IaaS (Infrastructure as a Service) with Terraform, Kubernetes, and Jenkins X for MLB Advanced Media streams.',
            'Proposed a new way of orchestrating Kubernetes deployments to MLB’s Advanced Media teams.'
          ]
        },
        {
          role: 'Jr. Fullstack Engineer',
          company: 'Coca-Cola - Contractor from CI&T',
          url: 'https://www.coca-colacompany.com',
          period: 'May 2018 - Jun 2019',
          tasks: [
            'Worked with the system architects to change and improve our team’s continuous delivery mentality and process.',
            'Developed web-based Adobe Experience Manager components for Coca-Cola’s European brands websites.'
          ]
        },
        {
          role: 'Software Developer Intern',
          company: 'CI&T',
          url: 'https://www.ciandt.com',
          period: 'Feb 2017 - May 2018',
          tasks: []
        },
        {
          role: 'Software Developer Intern',
          company: 'Omnilogic',
          url: '#', // Please replace '#' with the actual URL
          period: 'Jun 2014 - Dec 2014',
          tasks: []
        },
        {
          role: 'Software Developer Intern',
          company: 'Sinqia',
          url: 'https://www.sinqia.com.br',
          period: 'Mar 2011 - Sep 2011',
          tasks: []
        },
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

h3 {
  color: #333;  /* make headings a bit darker */
}

p {
  margin-bottom: 20px;
  color: #666;
}

.job {
  margin-bottom: 30px; /* add some space between jobs */
}

.tasks {
  margin-left: 20px; /* indent tasks */
}

.task-icon {
  color: #666;
  margin-right: 10px;
}

a:link,
a:visited {
  color: #4070a0;  /* a calming blue */
}

a:hover {
  color: #304050;  /* a darker shade when hovering */
}
</style>