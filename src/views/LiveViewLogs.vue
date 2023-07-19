<script xmlns="http://www.w3.org/1999/html">
import axios from "axios";

let fetchLog;
let job_title;
let job_id;
let log;
function getData(logUrl, mode, job) {
  try {
    if (mode === 'tail' || mode === 'full') {
      //json?logfile=FAST_AND_FURIOUS_G51_168925026218.log&mode=full&job=98
      logUrl = 'http://192.168.1.127:8887/json?logfile=' + logUrl + '&mode=' + mode + '&job=' + job;
    } else {
      logUrl = 'http://192.168.1.127:8887/logreader?logfile=' + logUrl + '&mode=' + mode + '&job=' + job;
    }
    const response = axios.get(logUrl);
    // JSON responses are automatically parsed.
    job_title = response.job_title;
    job_id = response.job
    log = response.log
  } catch (error) {
    console.log(error);
  }
}
export default {
  components: {},
  props: ['file', 'mode', 'job'],

  data() {
    return {
      log: [],
      mode: String,
      job: String,
      job_title: String,
    };
  },

  methods: {
    async getData(logUrl, mode, job) {
      try {
        if (mode === 'tail' || mode === 'full') {
          //json?logfile=FAST_AND_FURIOUS_G51_168925026218.log&mode=full&job=98
          logUrl = 'http://192.168.1.127:8887/json?logfile=' + logUrl + '&mode=' + mode + '&job=' + job;
        } else {
          logUrl = 'http://192.168.1.127:8887/logreader?logfile=' + logUrl + '&mode=' + mode + '&job=' + job;
        }
        console.log(logUrl)
        const response = await axios.get(logUrl);
        // JSON responses are automatically parsed.
        this.job_title = response.data.job_title;
        this.escaped = response.data.escaped
        this.job_id = response.data.job
        this.log = response.data.log
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData(this.$route.params.file, this.$route.params.mode, this.$route.params.job);
    const file = this.$route.params.file
    const mode = this.$route.params.mode
    const job = this.$route.params.job

    fetchLog = setInterval(function(){
      getData(file, mode, job);
      if(mode === 'tail'){
        window.scrollTo(0, document.querySelector("#log").scrollHeight);
      }
    }, 3000);
  },
  unmounted() {
    clearInterval(fetchLog);
  }
};
</script>

<template>
  <div class="jumbotron m-5">
    <div class="container-fluid h-100 mx-auto">
      <div class="row">
        <div class="card-deck p-5">
          <div class="bg-info card-header row no-gutters justify-content-center col-md-12 mx-auto text-left">
            <strong class="text-left">{{ job_title }}</strong>
          </div>
          <pre class="text-left text-white bg-secondary col-md-12" id="log">
              <code style="overflow-y: hidden;">
              {{ log }}
               </code>
            </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre{
  white-space: pre-wrap;
  text-overflow: ellipsis;
  padding: 14px;
}
</style>