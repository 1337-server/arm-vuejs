<script>
import InfoBlock from "@/components/InfoBlock.vue";
import axios from "axios";

let messageContainer;
let joblist;
function refreshJobs(){
  console.log("Timer" + Math.floor(Math.random() * (25)) + 1)
  axios
      .get('http://192.168.1.127:8887/json?mode=joblist').then((response) => {
    console.log(response.data);
    messageContainer.message = response.status
    messageContainer.server = response.data.server
    messageContainer.serverutil = response.data.serverutil
    messageContainer.hwsupport = response.data.hwsupport
  }, (error) => {
    console.log(error);
  });
  //.then(response => (messageContainer.message = response))
  return messageContainer
}
export default {
  name: 'SystemInfo',
  components: {
    InfoBlock,
  },
  data() {
    return {
      message: "Joey does’t share food!",
      server: {},
      serverutil: {},
      hwsupport: {}
    };
  },
  mounted() {
    messageContainer = this
    joblist = refreshJobs()
    this.message = "First Loaded"
    console.log(this.message);
    this.$nextTick(() => {
      this.message =
          "No data yet....Loading please wait";
      console.log(this.message);
    });
  }
}
</script>

<template>
  <InfoBlock v-bind:server="server" v-bind:serverutil="serverutil" v-bind:hwsupport="hwsupport"/>
</template>

<style scoped>

</style>