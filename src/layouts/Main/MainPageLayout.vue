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
        <q-btn class="notifications-button" unelevated>
          <img
            src="src/assets/notifications.svg"
            alt="Notifications"
            style="cursor: pointer"
            @click="showNotifications = !showNotifications"
          />
          <q-menu style="padding: 10px">
            <NotificationComponentVue :notifications="notifications" />
          </q-menu>
        </q-btn>
        <q-btn class="notifications-button" unelevated>
          <q-avatar class="q-avatar" color="yellow" text-color="white"
            >KJ</q-avatar
          >
          <q-menu
            style="
              padding: 17px 12px;
              box-shadow: 0px 6px 6px #00000021;
              border-radius: 10px;
            "
          >
            <div class="profile-header flex items-center">
              <q-avatar
                class="q-avatar"
                color="yellow"
                text-color="white"
                style="margin: 0px 18px 0 8px"
                >KJ</q-avatar
              >
              <h2>
                Krystyna Jankowicz <br /><span
                  >krystynajankowicz@mediaflex.pl</span
                >
              </h2>
            </div>
            <div class="profile-rest">
              <h5 class="profile-options flex items-center">
                <div class="profile-circle"></div>
                Mój profil
              </h5>
              <h5 class="profile-options flex items-center" style="padding: 0">
                <div class="profile-circle"></div>
                Wyloguj
              </h5>
            </div>
          </q-menu>
        </q-btn>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
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
</script>

<style lang="scss" scoped>
.header {
  background-color: $classic;
  padding: 15px 30px;
}

.container {
  background-color: $background;
  padding-bottom: 40px;
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

.notifications-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 40px;
  margin-left: 30px;
}

.profile-header {
  width: 360px;
  height: 79px;
  background: $classic 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #00000017;
  border-radius: 10px;

  h2 {
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
  }

  span {
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 0px;
  }
}

.profile-rest {
  .profile-circle {
    background: #703ada;
    width: 37px;
    height: 37px;
    border-radius: 100%;
    margin-right: 25px;
  }

  h5 {
    font: normal normal 500 14px/21px Poppins;
    letter-spacing: 0px;
  }

  .profile-options:first-of-type {
    padding-bottom: 23px;
    border-bottom: 1px solid #e0e3e5;
  }
}
</style>
