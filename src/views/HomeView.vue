<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Automatic Ripping Machine"/>
    <div class="container-fluid mx-auto">

    <div class="row align-items-center">
      <div class="col-md-12 mx-auto">
        <div id="joblist" class="card-deck">
          <JobTemplate v-bind:joblist="joblist"/>
        </div>
      </div>
    </div>
    </div>
    <h1>{{ message }}</h1>
    <InfoBlock v-bind:server="server" v-bind:serverutil="serverutil" v-bind:hwsupport="hwsupport"/>
  </div>
</template>

<script>
import JobTemplate from "@/components/jobcards/JobTemplate.vue";
import HelloWorld from '@/components/HomeScreenGreeting.vue'
import InfoBlock from "@/components/InfoBlock.vue";
import axios from "axios";

let refreshList;
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
    messageContainer.joblist = response.data.results
  }, (error) => {
    console.log(error);
  });
      //.then(response => (messageContainer.message = response))
  return messageContainer
}

export default {
  name: 'HomeView',
  components: {
    InfoBlock,
    JobTemplate,
    HelloWorld,
  },
  data() {
    return {
      message: "Joey does’t share food!",
      joblist: {},
      server: {},
      serverutil: {},
      hwsupport: {}
    };
  },
  mounted() {
    messageContainer = this
    joblist = refreshJobs()
    this.message="First Loaded"
    console.log(this.message);
    refreshList = setInterval(refreshJobs, 5000)
    this.$nextTick(() => {
      this.message =
          "No data yet....Loading please wait";
      console.log(this.message);
    });
  },
  unmounted() {
    console.log("Clearing timers")
    clearInterval(refreshList);
  }
}
</script>
<style scoped>
.home {
  font-weight: 500;
  font-size: 0.6rem;
  position: relative;
  top: 20px;
}

.home img{
  width: 228px;
  height: 85px;
}
h3 {
  font-size: 1.2rem;
}


</style>
