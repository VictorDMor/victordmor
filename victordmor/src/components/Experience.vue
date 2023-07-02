<template>
    <section>
      <h2>Experience</h2>
      <div v-for="(job, index) in jobs" :key="index">
        <h3>{{ job.position }}</h3>
        <h4>{{ job.company }}</h4>
        <p>{{ job.period }}</p>
        <ul>
          <li v-for="(duty, index) in job.duties" :key="index">{{ duty }}</li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'WorkExperience',
    data() {
      return {
        jobs: [
          {
            position: 'Sr. Backend Engineer',
            company: 'Andela, Remote',
            period: 'Jun 2022 - Present',
            duties: [
              'Initiated, developed, and currently maintaining a Python/Django REST application that drives a critical website application used by the business.',
              'Migrated big volumes of data from Salesforce to the new application using a housemade Salesforce ETL solution'
            ]
          },
          {
            position: 'Sr. Backend Engineer',
            company: 'Andela - Contractor from Holonic, Remote',
            period: 'Jun 2021 – Jun 2022',
            duties: [
              'Assigned as a contractor to Andela in a team responsible to design and plan their new platform.',
              'Created a business MVP with a team of multi-disciplinary people using Python/Django on the backend, and React on the frontend.'
            ]
          },
          {
            position: 'Mid-Level DevOps Engineer',
            company: 'Kohl’s - Contractor from CI&T, Remote',
            period: 'Dec 2020 – Jul 2021',
            duties: [
              'Created a new code and pipelines production deployment plan for Kohl’s Merchandising team.',
              'Migrated the Merchandising team’s entire code repository migration from GitHub to GitLab.'
            ]
          },
          {
            position: 'Mid-Level Data Engineer',
            company: 'Inter, Remote',
            period: 'Jun 2020 – Dec 2020',
            duties: [
              'Built data streams and pipelines using Python, Spark, SQL, and NiFi to feed reports and studies created by the bank’s data scientists that direct the Marketing and Sales decision-making process.'
            ]
          },
          {
            position: 'Jr. DevOps Engineer',
            company: 'Major League Baseball - Contractor from CI&T, Remote/New York City, USA',
            period: 'Nov 2019 - Jun 2020',
            duties: [
              'Outsourced to the client to develop and support their entire cloud infrastructure migration from AWS to Google Cloud Platform.',
              'Created tailored solutions using IaaS (Infrastructure as a Service) with Terraform, Kubernetes, and Jenkins X for MLB Advanced Media streams.',
              'Proposed a new way of orchestrating Kubernetes deployments to MLB’s Advanced Media teams.'
            ]
          },
          {
            position: 'Jr. Fullstack Engineer',
            company: 'Coca-Cola - Contractor from CI&T, Belo Horizonte, Brazil',
            period: 'May 2018 - Jun 2019',
            duties: [
              'Worked with the system architects to change and improve our team’s continuous delivery mentality and process.',
              'Developed web-based Adobe Experience Manager components for Coca-Cola’s European brands websites.'
            ]
          },
          {
            position: 'Software Developer Intern',
            company: 'CI&T, Belo Horizonte, Brazil',
            period: 'Feb 2017 - May 2018',
            duties: []
          },
          {
            position: 'Software Developer Intern',
            company: 'Omnilogic, Belo Horizonte, Brazil',
            period: 'Jun 2014 - Dec 2014',
            duties: []
          },
          {
            position: 'Software Developer Intern',
            company: 'attps Informática (now Sinqia), Belo Horizonte, Brazil',
            period: 'Mar 2011 - Sep 2011',
            duties: []
          },
          // Repeat for other jobs
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
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  </style>