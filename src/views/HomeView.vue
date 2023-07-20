<template>
  <div class="home pb-5">
    <Modal v-show="modalOpen" v-bind:title="modalTitle" v-bind:mode="mode" v-bind:errorMessage="errorMessage"
           v-bind:modalBody="modalBody" v-on:update-modal="update" v-on:yes="yes" v-bind:error="error"/>
    <img alt="Arm logo" title="Arm Logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Automatic Ripping Machine" msg2="Active Rips"/>
    <div class="container-fluid mx-auto">

    <div class="row align-items-center">
      <div class="col-md-12 mx-auto">
        <div id="joblist" class="card-deck">
          <JobTemplate v-bind:joblist="joblist" v-on:update-modal="update"
                       v-on:abandon="abandon" v-on:fixPerms="fixPerms"/>
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
import axios from "axios";
import InfoBlock from "@/components/InfoBlock.vue";
import Modal from "@/components/database/Modal.vue";
import {ref} from "vue";

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
  return messageContainer
}

export default {
  name: 'HomeView',
  components: {
    Modal,
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
      hwsupport: {},
      modalOpen: ref(false),
      modalTitle: String,
      modalBody: String,
      jobId: 0,
      mode: ref(false),
      currentJob: ref(),
      error: ref(),
      errorMessage: ref()
    };
  },
  mounted() {
    messageContainer = this
    joblist = refreshJobs()
    this.message="First Loaded"
    console.log(this.message);
    refreshList = setInterval(refreshJobs, 5000)
    this.$nextTick(() => {
      this.message = "No data yet....Loading please wait";
      console.log(this.message);
    });
  },
  unmounted() {
    console.log("Clearing timers")
    clearInterval(refreshList);
  },
  methods: {
    update: function() {
      console.log("emit fired")
      console.log(this.modalOpen)
      this.error = false
      this.errorMessage = ""
      this.modalOpen = !this.modalOpen;
      this.modalTitle = "Open/Close"
      console.log(this.modalOpen)
    },
    fixPerms: function (job){
      console.log("Fix perms fired")
      console.log(this.modalOpen)
      console.log(job.job_id)
      this.currentJob = job.job_id
      this.mode = "fixPerms"
      this.modalTitle = "Try to fix this jobs folder permissions ?"
      this.modalBody = "This will try to set the chmod values from your arm.yaml. It wont always work, you may need to do this manually"
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    abandon: function(job) {
      console.log("Abandon fired")
      console.log(this.modalOpen)
      console.log(job.job_id)
      this.currentJob = job.job_id
      this.mode = "abandon"
      this.modalTitle = "Abandon Job"
      this.modalBody = "This item will be set to abandoned. You cannot set it back to active! Are you sure?"
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    yes:function (){
      // Send ping to mode with currentJob id
      console.log(this.currentJob)
      console.log(this.mode)
      let jobURl = 'http://192.168.1.127:8887/json?job='+ this.currentJob + '&mode='+ this.mode
      axios
          .get(jobURl).then((response) => {
        console.log(response.data);
        if(response.data.Error || !response.data.success){
          this.error = true
          this.errorMessage = response.data.Error ? response.data.Error: "An unknown error occurred!"
        }
      }, (error) => {
        console.log(error);
      });
    }
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
