<template>
  <div class="photo column">
    <img src="../../assets/holiday-logo.svg" alt="Logo" />
    <img src="../../assets/login-picture.svg" alt="Obrazek logowania" />
    <h1>Witamy!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
      dapibus sapien.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.photo {
  width: 60%;
  background-color: #f1f1f1;
  padding: 50px 48px;
  border-radius: 10px 0px 0px 10px;
}
img:first-of-type {
  width: 113px;
  margin-bottom: 40px;
}

h1 {
  font: normal normal 600 28px/24px Poppins;
  padding: 48px 0 12px 0;
}
p {
  font: normal normal 16px/24px Poppins;
}
</style>
