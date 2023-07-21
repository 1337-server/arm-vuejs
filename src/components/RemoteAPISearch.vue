<template>
  <div v-for="item in results" class="col-4 text-center p-2">
    <div class="card text-center h-100">
      <div class="card-header">
        <a v-bind:href="'gettitle?imdbID='+ item['imdbID'] + '&job_id=' + job.job_id">
          <img v-bind:src="item['Poster']" width="120px" class="img-thumbnail" alt="Poster image">
        </a>
        <br>
        <strong>{{ item["Title"] }}</strong>
      </div>
      <div class="card-body">
        <strong>{{ item["Type"] }}
        ({{ item["Year"] }})</strong>
        <br>
        <strong>Plot: </strong>{{ item['details']['Plot'] }}
        <br>
      </div>
      <div class="card-footer">
        <a type="button" class="btn btn-primary btn-lg btn-block"
           v-on:click="console.log('Update job match')">Match Job</a>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: 'RemoteAPISearch',
  props: {
    job: {},
    results: ref({})
  },
}
</script>
<style>
.img-thumbnail{
  height: 150px;
  width: 100px;
}
</style>