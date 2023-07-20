<script setup>

import HomeScreenGreeting from "@/components/HomeScreenGreeting.vue";
</script>

<template>
  <div class="container justify-content-center jumbotron m-auto">
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <HomeScreenGreeting msg="Search for Title" msg2="Search the api for correct title match"/>
    </div>
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <form action="" method="get" novalidate>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="searchtitle">Title</span>
          </div>
          <input type="text" class="form-control" aria-label="searchtitle" name="title" value="{{job.title}}" aria-describedby="searchtitle">
          <div class="invalid-tooltip">
            Search can't be blank
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Year</span>
          </div>
          <input type="text" class="form-control" name="year" value="{{job.year}}" aria-label="year" aria-describedby="basic-addon1">
        </div>
        <input class="form-control" name="save" value="save" hidden>
        <input class="form-control" name="job_id" value="{{ job.job_id }}" hidden>
        <button class="btn btn-info btn-lg btn-block" type="submit">Search</button>
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