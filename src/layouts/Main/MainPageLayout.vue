<template>
    <q-layout class="container">
        <q-header class="header flex justify-between items-center">
            <div class="logo flex items-center">
                <img src="src/assets/holiday-logo.svg" alt="logo">
            </div>
            <div class="buttons flex items-center">
                <a href="#">Strona główna</a>
                <a href="#">Lista pracowników</a>
                <a href="#">Nieobecności</a>
                <a href="#">Moje wnioski</a>
                <ButtonComponent :label="'Złóż wniosek'" class="button" />
                <img src="src/assets/notifications.svg" alt="Notifications" style="margin-left: 30px;">
                <q-avatar class="q-avatar" color="yellow" text-color="white">KJ</q-avatar>
            </div>
        </q-header>
        <q-page-container>
          <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import ButtonComponent from "src/components/shared/ButtonComponent.vue";
</script>

<style lang="scss" scoped>
.header {
    background-color: $classic;
    padding: 15px 30px;
}

.container{
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

    a:hover{
        color: #703ADA;
    }

    .button {
        width: 139px;
        height: 52px;
        font: normal normal 600 14px/16px Poppins;
        text-transform: none;
    }

    .q-avatar{
        margin-left: 25px;
        width: 52px;
        height: 52px;
        font: normal normal bold 40px/31px Poppins;
    }
}
</style>