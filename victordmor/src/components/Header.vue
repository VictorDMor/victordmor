<template>
  <header>
    <div class="header-content">
      <img :src="imageSrc" alt="Profile picture" />
      <h1>{{ name }}</h1>
      <div class="contact-info">
        <a href="https://www.linkedin.com/in/vdmor/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/victordmor" target="_blank">
          <img :src="githubIcon" alt="GitHub" />
        </a>
        <a href="your-leetcode-url" target="_blank">
          <img :src="leetcodeIcon" alt="LeetCode" />
        </a>
        <a href="mailto:vdmoraes94@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
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

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}

nav ul li {
  margin-left: 10px;
}

nav ul li a {
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
</style>