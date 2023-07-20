<script>
export default {
  name: 'JobCardButtons',
  emits: ['jobCardEmit'],
  props: {
    job: {},
    modalOpen: Boolean
  },
}
</script>
<template>
  <div class="btn-group-vertical" role="group" aria-label="buttons">
    <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
       data-type="abandon" v-bind:data-jobid="job.job_id.split('_')[0]"
       v-bind:data-href="'json?job=' + job.job_id.split('_')[0] + '&mode=abandon'"
       v-on:click="$emit('jobCardEmit');console.log('Job Card emit')">Abandon Job
    </a>
    <a v-bind:href="'/logs/' + job.logfile + '/full/'+ job.job_id" class="btn btn-primary">View logfile</a>
    <a v-if="job.video_type !== 'Music'" v-bind:href="'titlesearch/'+ job.job_id.split('_')[0]" class="btn btn-primary">Title
      Search</a>
    <a v-if="job.video_type !== 'Music'" v-bind:href="'customTitle/'+ job.job_id.split('_')[0]" class="btn btn-primary">Custom
      Title</a>
    <a v-if="job.video_type !== 'Music'" v-bind:href="'changeparams/'+ job.job_id.split('_')[0]" class="btn btn-primary">Edit
      Settings</a>
    <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
       data-type="fixperms"
       v-bind:data-jobid="job.job_id.split('_')[0]" v-bind:data-href="'json?mode=fixperms&job='+ job.job_id.split('_')[0]">Fix Permissions
    </a>
  </div>
</template>

<style scoped>

</style>