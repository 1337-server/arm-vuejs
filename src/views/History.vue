<template>
  <link rel="stylesheet" href="/src/assets/css/job_details.css">
  <div class="container content">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <div class="jumbotron">
            <div class="row">
              <div class="col-sm-12  rounded text-center">
                <img src="/src/assets/img/arm80.png" alt=""><br/>
                <strong>Welcome to your Automatic Ripping Machine<br></strong>
                <h1>{{ message }}</h1>
              </div>
            </div>
            <br>
            <!-- PAGE NUMBERS -->
            <!-- Main Body -->
            <div class="row">
              <table class="table table-striped">
                <caption>Previous rips</caption>
                <thead class="tablesorterhead thead-dark">
                <tr style="margin: 0 auto">
                  <th scope="col" style="cursor: pointer;">Title</th>
                  <th scope="col" style="cursor: pointer;">Start Time</th>
                  <th scope="col" style="cursor: pointer;">Duration</th>
                  <th scope="col" style="cursor: pointer;">Status</th>
                  <th scope="col" style="cursor: pointer;">Logfile</th>
                </tr>
                </thead>
                <tbody>
                <HistoryLog v-for="job in joblist" :key="job.id" :job="job"/>
                </tbody>
              </table>
            </div>
            <!-- PAGE NUMBERS -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/*
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {
  /*
  Label the data
  */
  td:nth-of-type(1):before {
    content: "Job Start datetime:\A";
  }

  td:nth-of-type(2):before {
    content: "Duration:";
  }

  td:nth-of-type(2):after {
    content: " (h:mm:ss)";
  }

  td:nth-of-type(3):before {
    content: "Status:";
  }

  td:nth-of-type(4):before {
    content: "Logfile:\A";
  }
}

</style>

<script>
import HistoryLog from "@/components/HistoryLog.vue";
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
import axios from "axios";

export default {
  name: 'History',
  components: {
    HistoryLog,
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
  },
  unmounted() {
    console.log("Clearing timers")
    clearInterval(refreshList);
  }
}
</script>