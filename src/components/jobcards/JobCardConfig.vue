<template>
  <div class="card-body px-1 py-1">
    <div v-bind:id="'jobId' + job.job_id + '_RIPPER'"><strong>Ripper: </strong>{{ ripperName }}</div>

    <div v-bind:id="'jobId' + job.job_id + '_RIPMETHOD'"><strong>Rip Method: </strong>{{
      job.config.RIPMETHOD
      }}
    </div>
    <div v-bind:id="'jobId' + job.job_id + '_MAINFEATURE'"><strong>Main
      Feature: </strong>{{ job.config.MAINFEATURE }}
    </div>
    <div v-bind:id="'jobId' + job.job_id + '_MINLENGTH'"><strong>Min Length: </strong>{{
      job.config.MINLENGTH
      }}
    </div>
    <div v-bind:id="'jobId' + job.job_id + '_MAXLENGTH'"><strong>Max Length: </strong>{{
      job.config.MAXLENGTH
      }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobCardConfig',
  props: {
    job: {},
    ripperName: String
  }
}

</script>