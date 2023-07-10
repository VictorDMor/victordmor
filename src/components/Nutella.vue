<template>
    <div class="nutella">
      <img :src="nutellaDogPicture" alt="Nutella the Dog" class="framed-picture" />
    </div>
  </template>
  
  <script>
  import nutellaDogPicture from '@/assets/nunu.jpeg';
  
  export default {
    name: 'NunuNutella',
    data() {
      return {
        nutellaDogPicture,
      }
    }
  }
  </script>
  
  <style scoped>
  .framed-picture {
    max-width: 30%; /* control the size of the image */
    height: auto;
    display: block;
    margin: 20px auto; /* center the image */
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); /* add some shadow */
    border: 16px solid #8E402A; /* Nutella border */
    padding: 10px;
    border-radius: 5%; /* rounded corners */
  }
  </style>