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
let messageContainer;

// @ is an alias to /src
import axios from "axios";

export default {
  name: 'History',
  components: {
    HistoryLog,
  },
  data() {
    return {
      message: "Ripping History",
      joblist: {}
    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(
            "http://192.168.1.127:8887/json?mode=database"
        );
        // JSON responses are automatically parsed.
        this.joblist = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
}
</script>