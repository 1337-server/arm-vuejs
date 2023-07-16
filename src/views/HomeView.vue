<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Automatic Ripping Machine"/>
    <div class="container-fluid h-100 mx-auto">

    <div class="row h-100 align-items-center">
      <div class="col-md-12 mx-auto">
        <div id="joblist" class="card-deck">
          <JobTemplate v-bind:joblist="joblist"/>
        </div>
      </div>
    </div>
    </div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import JobTemplate from "@/components/jobcards/JobTemplate.vue";

let refreshList;
let messageContainer;
let joblist;
function refreshJobs(){
  console.log("Timer" + Math.floor(Math.random() * (25)) + 1)
  axios
      .get('http://localhost:8080/json?mode=joblist').then((response) => {
    console.log(response.data);
    messageContainer.message = response.status
    console.log(response.data.results)
    messageContainer.joblist = response.data.results
    joblist = JSON.parse(JSON.stringify(messageContainer.joblist))
    console.log(JSON.parse(JSON.stringify(messageContainer.joblist)));
  }, (error) => {
    console.log(error);
  });
      //.then(response => (messageContainer.message = response))
  return messageContainer.joblist
}
// @ is an alias to /src
import HelloWorld from '@/components/HomeScreenGreeting.vue'
import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    JobTemplate,
    HelloWorld
  },
  data() {
    return {
      message: "Joey doesn’t share food!",
      joblist: {}
    };
  },
  mounted() {
    messageContainer = this
    this.joblist = refreshJobs()
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
