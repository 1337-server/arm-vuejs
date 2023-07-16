<script>
export default {
  name: 'JobCardButtons',
  props: {
    job: {}
  }
}
</script>

<template>
  <div class="btn-group-vertical" role="group" aria-label="buttons">
    <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
       data-type="abandon" data-jobid="${idsplit[1]}"
       data-href="json?job=${idsplit[1]}&mode=abandon">Abandon Job
    </a>
    <a v-bind:href="'logs?logfile=' + job.logfile + '&mode=full'" class="btn btn-primary">View logfile</a>
    <a v-if="job.video_type !== 'Music'" href="titlesearch?job_id=${idsplit[1]}" class="btn btn-primary">Title
      Search</a>
    <a v-if="job.video_type !== 'Music'" href="customTitle?job_id=${idsplit[1]}" class="btn btn-primary">Custom
      Title</a>
    <a v-if="job.video_type !== 'Music'" href="changeparams?config_id=${idsplit[1]}" class="btn btn-primary">Edit
      Settings</a>
    <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
       data-type="fixperms"
       data-jobid="${idsplit[1]}" data-href="json?mode=fixperms&job=${idsplit[1]}">Fix Permissions
    </a>
  </div>
</template>

<style scoped>

</style>