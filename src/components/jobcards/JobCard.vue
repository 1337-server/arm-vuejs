<script setup>

</script>

<template>
  <!-- Local server or remote -->
  const idsplit = job.job_id.split("_");
  console.log(`${idsplit[1]} - ${idsplit[0]}`)
  <!-- Start creating the card with job id and header title -->
  <div class="col-md-4" id="jobId${job.job_id}">
    <div class="card m-3  mx-auto" style="min-height: 420px;">
      <div class="card-header row no-gutters justify-content-center"><strong id="jobId${job.job_id}_header">${titleManual(job)}</strong>
      </div>
      <!-- Main holder for the 3 sections of info - includes 1 section (Poster img)
      // We need to check if idsplit is undefined, database page doesn't have splitid's -->
      if (idsplit[1] === undefined) {
      <div class="row no-gutters">
        <div class="col-lg-4"><a href="/jobdetail?job_id=${job.job_id}">${posterCheck(job)}</a></div>
        } else {
        <div class="row no-gutters">
          <div class="col-lg-4"><a href="${job.server_url}/jobdetail?job_id=${idsplit[1]}">${posterCheck(job)}</a></div>
          }

          <!--          // Section 2 (Middle) Contains Job info (status, type, device, start time, progress)-->
          <div class="col-lg-4">
            <div class="card-body px-1 py-1">
              <div id="jobId${job.job_id}_year"><strong>Year: </strong>${job.year}</div>
              <div id="jobId${job.job_id}_video_type"><strong>Type: </strong>${job.video_type}</div>
              <div id="jobId${job.job_id}_devpath"><strong>Device: </strong>${job.devpath}</div>
              <div><strong>Status: </strong><img id="jobId${job.job_id}_status"
                                                 src="static/img/${job.status}.png" height="20px" alt="${job.status}"
                                                 title="${job.status}"></div>
              <div id="jobId${job.job_id}_progress_section">${transcodingCheck(job)}</div>
            </div>
          </div>
          if (idsplit[1] === undefined) {
          console.log("idsplit undefined... fixing");
          idsplit[0] = "0";
          idsplit[1] = job.job_id
          } else {
          console.log(`idsplit ${idsplit[0]} - ${idsplit[1]}`);
          }
<!--          // Section 3 (Right Top) Contains Config.values-->
          <div class="col-lg-4">
            <div class="card-body px-1 py-1">
              <div id="jobId${job.job_id}_RIPPER"><strong>Ripper: </strong>${getRipperName(job, idsplit)}</div>

              <div id="jobId${job.job_id}_RIPMETHOD"><strong>Rip Method: </strong>${job.config.RIPMETHOD}</div>

              <div id="jobId${job.job_id}_MAINFEATURE"><strong>Main Feature: </strong>${job.config.MAINFEATURE}</div>

              <div id="jobId${job.job_id}_MINLENGTH"><strong>Min Length: </strong>${job.config.MINLENGTH}</div>

              <div id="jobId${job.job_id}_MAXLENGTH"><strong>Max Length: </strong>${job.config.MAXLENGTH}</div>

            </div>
            <!--      // Section 3 (Right Bottom) Contains Buttons for arm json api-->
            <div class="card-body px-2 py-1">
              <div class="btn-group-vertical" role="group" aria-label="buttons" ${idsplit[0] !=="0" ?
              "style="display: none;"" : ""}>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                      data-type="abandon" data-jobid="${idsplit[1]}"
                      data-href="json?job=${idsplit[1]}&mode=abandon">Abandon Job
              </button>
              <a href="logs?logfile=${job.logfile}&mode=full" class="btn btn-primary">View logfile</a>`;
              x += musicCheck(job, idsplit);
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                      data-type="fixperms"
                      data-jobid="${idsplit[1]}" data-href="json?mode=fixperms&job=${idsplit[1]}">Fix Permissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>