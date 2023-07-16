<template>
  <nav>
    <router-link to="/">
        <CloseMenuIcon />
    </router-link>
    <router-link to="/"><HomeIcon />Home</router-link>
    <router-link to="/history"><HistoryIcon />History</router-link>
    <router-link to="/view_logs"><ViewLogsIcon />View Logs</router-link>
    <router-link to="/database"><DatabaseIcon />Database</router-link>
    <router-link to="/arm_settings"><ArmSettingsIcon />Arm Settings</router-link>
    <router-link to="/send_to_api"><SendToApiIcon />Send DVD's to API</router-link>
    <router-link to="/change_password"><ChangePasswordIcon />Change Admin Password</router-link>
    <router-link to="/welcome">
        <span class="PageSidebarItem-iconContainer-hoWhE">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-days" class="svg-inline--fa fa-calendar-days Icon-default-ZpHc_" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="font-size: 14px;">
            <path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z">
            </path>
          </svg>
        </span>
        <span>Calendar</span>
    </router-link>
  </nav>
  <router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: inherit;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.svg-inline--fa {
  display: inline-block;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>
<script setup>
import CloseMenuIcon from './components/icons/CloseMenu.vue'
import HomeIcon from './components/icons/Home.vue'
import HistoryIcon from './components/icons/History.vue'
import DatabaseIcon from './components/icons/Database.vue'
import ArmSettingsIcon from "@/components/icons/ArmSettings.vue";
import SendToApiIcon from "@/components/icons/SendToApi.vue";
import ChangePasswordIcon from "@/components/icons/ChangePassword.vue";
import ViewLogsIcon from "@/components/icons/ViewLogs.vue";
</script>