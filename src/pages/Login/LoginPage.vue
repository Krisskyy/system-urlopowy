<template>
  <h1>Logowanie</h1>
  <q-form action="/#/main">
    <LoginEmailComponent />

    <LoginPasswordComponent
      :isPwd="isPwd"
      :password="password"
      :label="'Hasło'"
    />

    <div class="flex justify-between items-center">
      <q-checkbox class="checkbox" size="24px" v-model="val" color="black"
        >Zapamiętaj mnie</q-checkbox
      >
      <a href="/#/ForgotPassword">Nie pamiętam hasła</a>
    </div>

    <ButtonComponent :label="'Zaloguj sie'" style="margin-top: 20px;"/>
  </q-form>
</template>

<script setup>
import ButtonComponent from "src/components/ButtonComponent.vue";
import LoginPasswordComponent from "src/components/Login/LoginPasswordComponent.vue";
import LoginEmailComponent from "src/components/Login/LoginEmailComponent.vue";
import { ref } from "vue";
const val = ref(true);
const isPwd = ref('');
const password = ref('');
</script>

<style lang="scss" scoped>
h1 {
  font: normal normal 600 28px/24px Poppins;
  padding: 100px 0 12px 0;
}
p {
  font: normal normal 16px/24px Poppins;
}

.input-margin {
  border-radius: 4px;
}

.input-margin:first-of-type {
  margin-bottom: 20px;
}

a {
  color: #703ada;
  font: normal normal 600 10px/16px Poppins;
  text-decoration: none;
}

.checkbox {
  font: normal normal 600 10px/16px Poppins;
}
</style>
