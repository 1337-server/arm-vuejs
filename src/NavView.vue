<script setup>
import CloseMenuIcon from './components/icons/CloseMenu.vue'
import HomeIcon from './components/icons/Home.vue'
import HistoryIcon from './components/icons/History.vue'
import DatabaseIcon from './components/icons/Database.vue'
import ArmSettingsIcon from "@/components/icons/ArmSettings.vue";
import SendToApiIcon from "@/components/icons/SendToApi.vue";
import ChangePasswordIcon from "@/components/icons/ChangePassword.vue";
import ViewLogsIcon from "@/components/icons/ViewLogs.vue";
import { ref } from 'vue'
let isShow = ref(true)
</script>
<template>
  <nav>
    <a @click="isShow = !isShow; console.log('Triggered='+ isShow);">
      <CloseMenuIcon/>
    </a>
    <router-link to="/">
      <HomeIcon/>
      <span v-show="isShow">Home</span></router-link>
    <router-link to="/history">
      <HistoryIcon/>
      <span v-show="isShow">History</span></router-link>
    <router-link to="/view_logs">
      <ViewLogsIcon/>
      <span v-show="isShow">View Logs</span></router-link>
    <router-link to="/database">
      <DatabaseIcon/>
      <span v-show="isShow">Database</span></router-link>
    <router-link to="/arm_settings">
      <ArmSettingsIcon/>
      <span v-show="isShow">Arm Settings</span></router-link>
    <router-link to="/send_to_api">
      <SendToApiIcon/>
      <span v-show="isShow">Send DVD's to API</span></router-link>
    <router-link to="/change_password">
      <ChangePasswordIcon/>
      <span v-show="isShow">Change Admin Password</span></router-link>
  </nav>
</template>
<style>

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a span {
  display: inline;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
</style>