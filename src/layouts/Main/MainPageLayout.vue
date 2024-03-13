<template>
  <q-layout class="container">
    <q-header class="header flex justify-between items-center">
      <div class="logo flex items-center">
        <img src="src/assets/holiday-logo.svg" alt="logo" />
      </div>
      <div class="buttons flex items-center">
        <a href="#">Strona główna</a>
        <a href="#">Lista pracowników</a>
        <a href="#">Nieobecności</a>
        <a href="#">Moje wnioski</a>
        <ButtonComponent :label="'Złóż wniosek'" class="button" />
        <img
          src="src/assets/notifications.svg"
          alt="Notifications"
          style="margin-left: 30px"
          @click="showNotifications = !showNotifications"
        />
        <q-avatar class="q-avatar" color="yellow" text-color="white"
          >KJ</q-avatar
        >
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <div v-if="showNotifications" class="notifications">
      <NotificationComponentVue :notifications="notifications" />
    </div>
  </q-layout>
</template>

<script setup>
import ButtonComponent from "src/components/shared/ButtonComponent.vue";
import NotificationComponentVue from "src/components/Main/NotificationComponent.vue";
import { ref } from "vue";

const notifications = ref([
  {
    title: "Akceptacja wniosku",
    date: "10.02.2012",
    time: "12:34",
    color: "",
    content:
      "Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01.2024r. została zaakceptowana",
  },
  {
    title: "Odrzucenie wniosku",
    date: "10.02.2012",
    time: "12:34",
    color: "#ff8c8c",
    content:
      "Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01.2024r. została odrzucona",
  },
  {
    title: "Akceptacja wniosku",
    date: "10.02.2012",
    time: "12:34",
    color: "",
    content:
      "Twoja prośba wniosku o urlop wypoczynkowy w terminie: 23.12.2023r. - 23.01.2024r. została zaakceptowana",
  },
]);

const showNotifications = ref(false);
</script>

<style lang="scss" scoped>
.header {
  background-color: $classic;
  padding: 15px 30px;
}

.container {
  background-color: $background;
}
.buttons {
  a {
    text-decoration: none;
    color: black;
    margin-right: 30px;
    font: normal normal 600 14px/24px Poppins;
  }
  a:first-of-type {
    color: $button;
    font-weight: 800;
  }

  a:hover {
    color: #703ada;
  }

  .button {
    width: 139px;
    height: 52px;
    font: normal normal 600 14px/16px Poppins;
    text-transform: none;
  }

  .q-avatar {
    margin-left: 25px;
    width: 52px;
    height: 52px;
    font: normal normal bold 40px/31px Poppins;
  }
}
.notifications {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 6px #00000021;
  border-radius: 10px;
  width: 384px;
  height: 358px;
  position: absolute;
  top: 80px;
  right: 100px;
  padding: 15px 16px;
  overflow-y: auto;
}
</style>
