<template>
    <div id="projects">
        <h2>My Projects</h2>
        <div class="project" v-for="project in projects" :key="project.id">
        <h3><a :href="project.link">{{ project.name }}</a></h3>
        <p>{{ project.description }}</p>
        <div class="languages">
            <h4>Languages and Libraries used:</h4>
            <p>{{ project.languages }}</p>
        </div>
        </div>
    </div>
</template>
  
  
<script>
  export default {
    name: 'PersonalProjects',
    data() {
      return {
        projects: [
          {
            id: 1,
            name: 'LeetCode Challenges',
            link: 'https://github.com/VictorDMor/leetcode',
            description: 'In this repo, started in December 2022, I\'m solving LeetCode challenges. I have solved 104 problems, and there are problems with JavaScript, Python or SQL.',
            languages: "Python, SQL, JavaScript"
          },
          {
            id: 2,
            name: 'CV Final Project',
            link: 'https://github.com/VictorDMor/cv-final-project',
            description: 'Computer Vision\'s subject final project: Detection of features in a football match using computer vision: A study case using the 2016 Rio Olympic Games gold medal match.',
            languages: "Python, NumPy, Matplotlib, OpenCV"
          },
          // more projects...
        ]
      }
    }
  }
</script>
  
<style scoped>
  #projects {
    width: 80%;
    margin: 0 auto;
  }
  
  .project {
    text-align: left;
    margin-bottom: 50px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 8px;
  }
  
  .project h3 {
    margin: 0;
    color: #192430;
  }
  
  .project h3 a {
    color: #333;
  }
  
  .project p {
    margin: 20px 0;
    color: #333;
    line-height: 1.6;
  }
  
  .languages {
    margin: 20px 0;
  }
  
  .languages h4 {
    margin-bottom: 10px;
    color: #192430;
  }
  
  .languages ul {
    padding-left: 20px;
  }
  
  .languages li {
    color: #333;
  }
</style>