<template>
  <h1>Nie pamiętam hasła</h1>
  <q-form action="/#/ChangePassword" @submit="onSubmit">
    <LoginEmailComponent />
    <p>Na Twój adres e-mail wyślemy kod do zmiany hasła</p>
    <ButtonComponent :label="'Wyślij'" />
  </q-form>
</template>

<script setup>
import LoginEmailComponent from "src/components/Login/LoginEmailComponent.vue";
import ButtonComponent from "src/components/ButtonComponent.vue";
</script>

<style lang="scss" scoped>
h1 {
  font: normal normal 600 28px/24px Poppins;
  padding: 125px 0 12px 0;
}
</style>
