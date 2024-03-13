<template>
  <h1>Zmiana hasła</h1>
  <LoginEmailComponent readonly />
  <p>Na Twój adres e-mail wyślemy kod do zmiany hasła</p>
  <p>Wpisz przesłany kod poniżej:</p>
  <q-form action="/#/NewPassword">
    <h2>Kod</h2>
    <div class="flex justify-between">
    <q-input
      v-for="(input, index) in inputs"
      :key="index"
      class="code-box flex items-center"
      outlined
      v-model="input.text"
      mask="#"
      input-style="text-align: center"
    ></q-input>
    </div>
    <q-btn flat style="color: #703ADA; margin-top: 30px; padding: 0; font: normal normal 600 14px/21px Poppins;">KOD NIE DOTARŁ? WYŚLIJ PONOWNIE</q-btn>
    <div class="flex justify-end">
      <ButtonComponent :label="'Weryfikuj'"
              style="width: 110px; height: 40px; letter-spacing: 0; text-transform: none; font: normal normal 600 14px/16px Poppins;" />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import LoginEmailComponent from "src/components/Login/LoginEmailComponent.vue";
import ButtonComponent from "src/components/shared/ButtonComponent.vue";
const inputs = ref([
      { text: '' }, 
      { text: '' }, 
      { text: '' }, 
      { text: '' }  
    ]) 

</script>

<style lang="scss" scoped>
h1 {
  font: normal normal 600 28px/24px Poppins;
  padding: 95px 0 12px 0;
}

h2 {
  font: normal normal 600 12px/24px Poppins;
  letter-spacing: 0px;
  color: #212121;
}

p{
  font: normal normal normal 12px/24px Poppins;
}

.code-box {
  width: 68px;
  max-height: 40px;
}

</style>
