<template>
  <header>
    <div class="header-content">
      <img :src="imageSrc" alt="Profile picture" class="profile-pic"/>
      <h1>{{ name }}</h1>
      <div class="contact-info">
        <a href="https://www.linkedin.com/in/vdmor/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/victordmor" target="_blank">
          <img :src="githubIcon" alt="GitHub" />
        </a>
        <a href="https://leetcode.com/vdmoraes94/" target="_blank">
          <img :src="leetcodeIcon" alt="LeetCode" />
        </a>
        <a href="mailto:victor@weaifuture.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
      <nav>
        <router-link to="/about">About</router-link> |
        <router-link to="/skills">Skills</router-link> |
        <router-link to="/experience">Experience</router-link> |
        <router-link to="/education">Education</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/nutella">Nutella</router-link>
      </nav>
    </div>
  </header>
</template>
  
<script>
  import profilePic from '@/assets/personal_picture.png';

  export default {
    name: 'MainHeader',
    data() {
      return {
        name: 'Victor D. Moraes',
        imageSrc: profilePic,
        githubIcon: require('@/assets/github.svg'),
        leetcodeIcon: require('@/assets/leetcode.svg'),
        gmailIcon: require('@/assets/gmail.svg')
      }
    }
  }
</script>
  
<style scoped>
header {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

header h1 {
  margin: 10px 0 0 0;
  color: #333;
}

nav {
  margin-top: 10px;
}

nav a {
  text-decoration: none;
  color: #333;
}

.contact-info img {
  width: 24px;
  height: 24px;
}

.contact-info i {
  font-size: 28px;
  color: #333;
}

.contact-info {
  margin-top: 10px;
}
.contact-info a {
  margin: 0 5px;
}

.profile-pic {
  border: 5px solid #333;
  border-radius: 50%;
}
</style>