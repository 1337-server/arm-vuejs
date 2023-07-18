<template>
  <div>
    <app-tabs :tabList="tabList" :tabLinks="tabLinks">
    </app-tabs>
  </div>
</template>

<script>
import AppTabs from "@/components/AppTabs.vue";

export default {
  components: {
    AppTabs,
  },

  data() {
    return {
      tabList: ["General Info", "System Info", "Abcde Config",
        "Ripper Settings", "UI Settings", "Apprise Config", "Help"],
      tabLinks:["general-info", "system-info", "abcde-config",
        "ripper-settings", "ui-settings", "apprise-config", "help"]
    };
  }
};
</script>