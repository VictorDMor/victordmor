<template>
    <section id="about">
      <h2>About Me</h2>
      <p>
        As a Software Engineer with 10+ years of experience, I currently serve as a Sr. Backend Engineer at <a href="https://www.andela.com">Andela</a>.
        While my primary programming language is Python with over 7 years of experience, I also possess proficiency in Node and
        Java. In addition, I have prior experience as a DevOps Engineer in a consultancy setting and as Data Engineer.
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutMe'
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
  
  p {
    color: #666;
    line-height: 1.6;
  }

  a:visited {
    color: #666;
    text-decoration: none;
  }

  a:hover {
    color: #333;
    text-decoration: none;
  }

  a:link {
    color: #666;
  }
  </style>