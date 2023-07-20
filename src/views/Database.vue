<script>

import Modal from "@/components/database/Modal.vue";
import HomeScreenGreeting from "@/components/HomeScreenGreeting.vue";
import Messages from "@/components/database/Messages.vue";
import Buttons from "@/components/database/Buttons.vue";
import JobTemplate from "@/components/jobcards/JobTemplate.vue";
import axios from "axios";
import {ref} from "vue";

let refreshList;
let messageContainer;
let joblist;
function refreshJobs(){
  console.log("Timer" + Math.floor(Math.random() * (25)) + 1)
  axios
      .get('http://192.168.1.127:8887/json?mode=database').then((response) => {
    console.log(response.data);
    messageContainer.message = response.status
    console.log(response.data.results)
    messageContainer.joblist = response.data.results
    joblist = JSON.parse(JSON.stringify(messageContainer.joblist))
    console.log(JSON.parse(JSON.stringify(messageContainer.joblist)));
  }, (error) => {
    console.log("Error!");
    console.log(error);
  });
  //.then(response => (messageContainer.message = response))
  return messageContainer.joblist
}
// @ is an alias to /src
export default {
  name: 'database',
  components: {
    JobTemplate,
    Modal,
    Messages,
    Buttons,
    HomeScreenGreeting
  },
  data() {
    return {
      message: "Joey does’t share food!",
      joblist: {},
      modalOpen: ref(false),
      modalBody: ref(false),
      mode: ref(false),
    };
  },
  mounted() {
    messageContainer = this
    this.joblist = refreshJobs()
    this.message="First Loaded"
    console.log(this.message);
    this.$nextTick(() => {
      this.message =
          "No data yet....Loading please wait";
      console.log(this.message);
    });
  },
  methods: {
    update: function() {
      console.log("update fired")
      console.log(this.modalOpen)
      this.modalTitle = "Abandon Job"
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    abandon: function() {
      console.log("Abandon fired")
      console.log(this.modalOpen)
      this.modalTitle = "Abandon Job"
      this.mode = "abandon"
      this.modalBody = "This item will be set to abandoned. You cannot set it back to active! Are you sure?"
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    search: function() {
      console.log("search fired")
      console.log(this.modalOpen)
      this.modalTitle = "Search for jobs..."
      this.mode = "search"
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    getFail: function (){
      console.log("search fired")
      console.log(this.modalOpen)
      this.modalTitle = "Get all failed jobs ?"
      this.mode = "getfailed"
      this.modalBody = ""

      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    getSucc: function (){
      console.log("search fired")
      console.log(this.modalOpen)
      this.modalTitle = "Get all successful jobs ?"
      this.mode = "getSuccessful"
      this.modalBody = ""

      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
    fixPerms: function (){
      console.log("Fix perms fired")
      console.log(this.modalOpen)
      this.modalTitle = "Try to fix this jobs folder permissions ?"
      this.mode = "fixPerms"
      this.modalBody = "This will try to set the chmod values from your arm.yaml. It wont always work, you may need to do this manually"

      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
  }
}
</script>

<template>

  <div class="jumbotron m-5 mb-5">
    <!-- Header image -->
    <br>
    <HomeScreenGreeting msg="Database Entries" msg2=""/>
    <!-- Modal -->
    <Modal v-show="modalOpen" v-bind:title="modalTitle" v-bind:mode="mode"
           v-bind:modalBody="modalBody" v-on:update-modal="update"/>
    <!-- Messages -->
    <Messages/>

    <Buttons v-on:update-modal="update" v-on:search="search"
             v-on:getFail="getFail" v-on:getSucc="getSucc"/>

    <!--PAGINATION-->

    <!-- All jobs -->
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div class="card-deck">
          <!-- Job {{ job.job_id }}-->
          <div class="container-fluid h-100 mx-auto">
            <div class="row h-100 align-items-center">
              <div class="col-md-12 mx-auto">
                <div id="joblist" class="card-deck">
                  <JobTemplate v-bind:joblist="joblist" v-on:update-modal="update"
                               v-on:abandon="abandon" v-on:fixPerms="fixPerms"/>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>
  </div>
  <!--PAGINATION-->

</template>