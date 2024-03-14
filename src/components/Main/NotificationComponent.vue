<template>
  <div
    v-for="(notification, index) in notifications"
    :key="index"
    class="notification"
  >
    <div class="notification-header flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="notifications-circle"
          :style="{ background: notification.color }"
        ></div>
        <h4>{{ notification.title }}</h4>
      </div>
      <div class="flex column">
        <h5>{{ notification.date }}</h5>
        <h5 style="text-align: right">{{ notification.time }}</h5>
      </div>
    </div>
    <p>{{ notification.content }}</p>
  </div>
  <a class="flex justify-end items-center" href="#">Zobacz wszystkie</a>
</template>

<script setup>
const { notifications } = defineProps({ notifications: Array });
</script>

<style lang="scss" scoped>
p {
  font: normal normal normal 10px/16px Poppins;
  margin-right: 40px;
}

a {
  font: normal normal 600 14px/24px Poppins;
  color: #703ada;
  text-decoration: none;
  margin-top: 9px;
}

h4 {
  font: normal normal 600 14px/24px Poppins;
  margin: 0;
}

h5 {
  font: normal normal 600 12px/18px Poppins;
  margin: 0;
}

h5:first-of-type {
  margin-top: 18px;
}

.notification {
  border-bottom: 1px solid #a6a6a6;
}

.notification-header {
  height: 30px;
  margin-bottom: 15px;
}

.notifications-circle {
  background: #66ddb3 0% 0% no-repeat padding-box;
  border-radius: 100%;
  width: 13px;
  height: 13px;
  margin-right: 10px;
}
</style>
