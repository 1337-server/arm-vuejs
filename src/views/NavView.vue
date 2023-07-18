<script setup>
import CloseMenuIcon from '../components/icons/CloseMenu.vue'
import HomeIcon from '../components/icons/Home.vue'
import HistoryIcon from '../components/icons/History.vue'
import DatabaseIcon from '../components/icons/Database.vue'
import ArmSettingsIcon from "@/components/icons/ArmSettings.vue";
import SendToApiIcon from "@/components/icons/SendToApi.vue";
import ChangePasswordIcon from "@/components/icons/ChangePassword.vue";
import ViewLogsIcon from "@/components/icons/ViewLogs.vue";
import NaviAccordionSettings from "@/components/NaviAccordionSettings.vue";
import { ref } from 'vue'
let isShow = ref(true)
let isOpen = ref(false)
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
    <a @click="isOpen = !isOpen; console.log('Triggered_accordion='+ isOpen);" role="button" class="user-select-none">
      <ArmSettingsIcon/>
      <span v-show="isShow">Arm Settings</span></a>
    <Transition name="slidedown">
    <NaviAccordionSettings :isOpen="isOpen" v-show="isOpen" />
    </Transition>
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

.slidedown-enter-active,
.slidedown-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 1000px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>