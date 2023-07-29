<template>
  <div class="container justify-content-center jumbotron mt-5">
    <Modal v-show="currentLoading" title="Loading search..."/>
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <HomeScreenGreeting msg="Search for Title" msg2="Search the api for correct title match"/>
    </div>
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <form ref="form" @submit.prevent="submit">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="searchtitle">Title</span>
          </div>
          <input type="text" class="form-control" aria-label="searchtitle" name="title"
                 v-model="title" aria-describedby="searchtitle">
          <div class="invalid-tooltip">
            Search can't be blank
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Year</span>
          </div>
          <input type="text" class="form-control" name="year" v-model="year"
                 aria-label="year" aria-describedby="basic-addon1">
        </div>
        <input class="form-control" name="mode" value="search_remote" hidden>
        <button class="btn btn-info btn-lg btn-block" type="submit">Search</button>
      </form>
    </div>
    <br>
    <br>
    <div v-show="searchResults" class="row">
      <RemoteAPISearch :job="job" :results="results"/>
    </div>
  </div>
</template>

<script>

import HomeScreenGreeting from "@/components/HomeScreenGreeting.vue";
import {defineComponent, ref} from "vue";
import axios from "axios";
import RemoteAPISearch from "@/components/RemoteAPISearch.vue";
import Modal from "@/components/database/Modal.vue";

export default defineComponent({
  components: {Modal, RemoteAPISearch, HomeScreenGreeting},
  props: {
    job: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      job: {},
      title: "",
      year: "",
      results: ref(),
      searchResults: false,
      currentLoading: false,
      arm_API: this.armapi
    };
  },
  methods: {
    async getData(jobid) {
      try {
        const response = await axios.get(
            this.arm_API + "/jobs/" + jobid
        );
        // JSON responses are automatically parsed.
        console.log(response.data)
        this.job = response.data
        this.title = response.data.title
        this.year = response.data.year
      } catch (error) {
        console.log(error);
      }
    },
    submit: function () {
      this.currentLoading = true
      this.year = (this.year == null || this.year === "") ? 'null' : this.year
      axios.get(this.arm_API + '/search_remote/' + this.title + "/" + this.year+ "/" + this.job.job_id)
          .then(res => this.search(res)).catch(
              error => console.log("error:"+ error),
          this.currentLoading = false)
    },
    search: function (response) {
      console.log(response.data)
      if(response.data.success){
        this.searchResults = true
        this.currentLoading = false
        this.job.title = response.data.title
        this.job.year = response.data.year
        console.log(response.data.search_results.Search)
        this.results = response.data.search_results.Search
        console.log(this.results)
      }
    }
  },
  created() {
    this.getData(this.$route.params.job);
  },
})

</script>