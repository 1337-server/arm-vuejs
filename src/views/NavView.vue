<script setup>
import CloseMenuIcon from '../components/icons/CloseMenu.vue'
import HomeIcon from '../components/icons/Home.vue'
import HistoryIcon from '../components/icons/History.vue'
import DatabaseIcon from '../components/icons/Database.vue'
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
nav {
  border-right: groove var(--lt-color-gray-500);
  background-color: #595959;
  //width: 200px;
  color: #f2f2f2;
}
nav a.router-link-exact-active, nav a.router-link-exact-active svg {
  color: #42b983;
}
nav a svg{
  margin: 5px;
}
nav a.router-link-exact-active svg {
  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
}
nav a {
  font-weight: bold;
  padding: 10px;
  color: #f2f2f2;
}
nav a:hover{
  color: #36c7c7;
  text-decoration: none;
}

nav a span {
  display: inline;
}
</style>