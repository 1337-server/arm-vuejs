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
      modalOpen: ref(false)
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
      console.log("emit fired")
      console.log(this.modalOpen)
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    },
  }
}
</script>

<template>

  <div class="container-fluid h-100 mx-auto">
    <!-- Header image -->
    <br>
    <HomeScreenGreeting msg="Database"/>
    <div class="row mx-auto align-items-center">
      <div class="col-sm-12 mx-auto">
        <p class="text-center">
          <h5 class="text-center"><strong>Database Entries</strong></h5>
        </p>
      </div>
    </div>
    <!-- Modal -->
    <Modal v-show="modalOpen"/>
    <!-- Messages -->
    <Messages/>

    <Buttons modalOpen="modalOpen" v-on:click="console.log('search buttons');update()"/>

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
                  <JobTemplate v-bind:joblist="joblist" v-on:update-modal="update"/>
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