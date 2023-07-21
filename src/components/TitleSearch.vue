<script>

import HomeScreenGreeting from "@/components/HomeScreenGreeting.vue";
import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent({
  components: {HomeScreenGreeting},
  props: {
    job: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      job: ref(),
    };
  },
  methods: {
    async getData(jobid) {
      try {
        const response = await axios.get(
            "http://192.168.1.127:8887/json?mode=get_job_details&job_id=" + jobid
        );
        // JSON responses are automatically parsed.
        console.log(response.data)
        this.job = response.data.jobs
        this.joblist = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData(this.$route.params.job);
  },
  search(){
    console.log("Searching...");
  }
})

</script>

<template>
  <div class="container justify-content-center jumbotron m-auto">
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <HomeScreenGreeting msg="Search for Title" msg2="Search the api for correct title match"/>
    </div>
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <form action="" @submit.prevent="submitForm">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="searchtitle">Title</span>
          </div>
          <input type="text" class="form-control" aria-label="searchtitle" name="title" v-bind:value="job.title" aria-describedby="searchtitle">
          <div class="invalid-tooltip">
            Search can't be blank
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Year</span>
          </div>
          <input type="text" class="form-control" name="year" v-bind:value="job.year" aria-label="year" aria-describedby="basic-addon1">
        </div>
        <input class="form-control" name="save" value="save" hidden>
        <input class="form-control" name="job_id" v-bind:value="job.job_id" hidden>
        <button class="btn btn-info btn-lg btn-block" type="button" v-on:click="search">Search</button>
      </form>
    </div>
  </div>
  <br>
  <br>
  <div v-if="results" class="row">
    {% for res in results["Search"] %}
    <div v-for="result in results" class="col-md-3 text-center">
      <div class="card text-center">
        <div class="card-header">
          <a v-bind:href="'gettitle?imdbID='+ result['imdbID'] + '&job_id=' + job.job_id">
          <img v-bind:src="result['Poster']" width="120px" class="img-thumbnail" alt="Poster image">
          </a>
        </div>
        <div class="card-body"><strong>{{ res["Title"] }}</strong> - {{ res["Type"].capitalize() }}
          ({{ res["Year"] }})
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>