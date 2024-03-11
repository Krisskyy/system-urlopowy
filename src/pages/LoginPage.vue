<template>
  <h1>Logowanie</h1>
  <q-form action="" @submit="onSubmit">
    <q-input
      class="input-margin"
      color="black"
      v-model="email"
      filled
      type="email"
      label="Adres e-mail"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Proszę podać adres e-mail']"
    ></q-input>

    <q-input
      class="input-margin"
      color="black"
      v-model="password"
      filled
      :type="isPwd ? 'password' : 'text'"
      label="Hasło"
      :rules="[(val) => (val && val.length > 0) || 'Proszę wpisać hasło']"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        ></q-icon>
      </template>
    </q-input>

    <div class="flex justify-between items-center">
      <q-checkbox class="checkbox" size="24px" v-model="val" color="black"
        >Zapamiętaj mnie</q-checkbox
      >
      <a href="#">Nie pamiętam hasła</a>
    </div>

    <q-btn class="submit" label="Zaloguj sie" type="submit" />
  </q-form>
</template>

<script setup>
import { ref } from "vue";
const isPwd = ref(true);
const email = ref("");
const password = ref("");
const val = ref(true);
</script>

<style lang="scss" scoped>
h1 {
  font: normal normal 600 28px/24px Poppins;
  padding: 48px 0 12px 0;
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

.submit {
  width: 100%;
  background: #703ada;
  height: 60px;
  color: #ffffff;
  margin-top: 20px;
}

.checkbox {
  font: normal normal 600 10px/16px Poppins;
}
</style>
