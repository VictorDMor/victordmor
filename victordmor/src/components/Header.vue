<template>
  <header>
    <div class="header-content">
      <img :src="imageSrc" alt="Profile picture" />
      <h1>{{ name }}</h1>
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
        imageSrc: profilePic
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
</style>