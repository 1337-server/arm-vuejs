<script setup>

import HomeScreenGreeting from "@/components/HomeScreenGreeting.vue";
</script>

<template>
  <div class="container justify-content-center m-auto jumbotron">
    <div class="col justify-content-center" style="flex-wrap: nowrap">
      <HomeScreenGreeting msg="Custom Title" msg2="This is intended for DVDs or for TV Series that have more than one disk"/>
    </div>
    <div class="row">
      <div class="justify-content-center m-auto">
        <form action="" method="get" novalidate>
          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="searchtitle">Title</span>
            </div>
            <input type="text" class="form-control" aria-label="searchtitle" name="title" placeholder="title..." value="{{job.title }}" aria-describedby="searchtitle">
            <div class="invalid-tooltip">
              Title can't be blank
            </div>
          </div>
          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Year</span>
            </div>
            <input type="text" class="form-control" name="year" aria-label="year" value="{{ job.year }}" aria-describedby="basic-addon1">
          </div>
          <input class="form-control" name="job_id" value="{{ job.job_id }}" hidden>
          <button class="btn btn-info btn-lg btn-block" type="submit">Set Custom Title</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>