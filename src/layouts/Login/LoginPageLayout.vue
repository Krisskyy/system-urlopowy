<template>
  <q-layout class="container flex flex-center">
    <div class="box flex">
      <LoginComponent />
      <div class="login">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import LoginComponent from "src/components/Login/LoginComponent.vue";
</script>

<style lang="scss" scoped>

.container {
  background: $background;
}

.box {
  width: 1210px;
  box-shadow: 1px 4px 21px -12px rgba(66, 68, 90, 1);
}

.login {
  background: #ffffff;
  border-radius: 0px 10px 10px 0px;
  width: 40%;
  padding: 10px 41px 40px 50px;
}
</style>
