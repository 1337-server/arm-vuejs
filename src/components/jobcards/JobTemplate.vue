<script setup>
import JobCardPoster from "@/components/jobcards/JobCardPoster.vue";
import JobCardButtons from "@/components/jobcards/JobCardButtons.vue";
import JobCardConfig from "@/components/jobcards/JobCardConfig.vue";
import JobCardMiddle from "@/components/jobcards/JobCardMiddle.vue";

defineProps({
  joblist: {
    type: Object,
    required: true
  }
})

function titleManual(job) {
  let x;
  if (job.title_manual !== "None") {
    x = `${job.title_manual}(${job.year})`;
  } else {
    x = `${job.title}(${job.year})`;
  }
  return x;
}
function getRipperName(job) {
  let idsplit = job.job_id.split("_");
  console.log(idsplit)
  console.log(job.ripper)
  console.log(idsplit[0])
  let ripperName;
  if (job.ripper) {
    ripperName = job.ripper;
  } else {
    if (idsplit[1] === "0") {
      ripperName = "Local";
    } else {
      ripperName = "";
    }
  }
  return ripperName;
}
</script>

<template>
    <!-- Start creating the card with job id and header title -->
    <div v-for="job in joblist" :key="job.id" class="col-md-4" v-bind:id="'jobId' + job.job_id ">
      <div class="card m-3  mx-auto" style="min-height: 420px;">
        <div class="card-header row no-gutters justify-content-center">
          <strong v-bind:id="'jobId' + job.job_id + '_header '"> {{ titleManual(job) }} </strong>
        </div>
        <!-- Main holder for the 3 sections of info - includes 1 section (Poster img)
        // We need to check if idsplit is undefined, database page doesn't have splitid's -->
        <div class="row no-gutters">
          <JobCardPoster :job="job"/>

          <!--// Section 2 (Middle) Contains Job info (status, type, device, start time, progress)-->
          <JobCardMiddle :job="job"/>
          <!--          // Section 3 (Right Top) Contains Config.values-->
          <div class="col-lg-4">
            <JobCardConfig :job="job" :ripper-name="getRipperName(job)"/>
            <!--      // Section 3 (Right Bottom) Contains Buttons for arm json api-->
            <div class="card-body px-2 py-1">
                <JobCardButtons :job="job"/>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>