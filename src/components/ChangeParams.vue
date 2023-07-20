<script setup>
import HomeScreenGreeting from "@/components/HomeScreenGreeting.vue";
</script>

<template>
  <div class="container justify-content-center jumbotron m-auto">
    <div class="col justify-content-center" style="flex-wrap: nowrap">
      <HomeScreenGreeting msg="Change Job Parameters" msg2=""/>
    </div>
    <div class="row justify-content-center" style="flex-wrap: nowrap">
      <div class="col-7">
        <form id="changeParams" name="changeParams" action="" method="get" novalidate>
          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Rip Method:</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">mkv</option>
                <option value="2">backup</option>
              </select>
            </div>

          </div>

          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Disc Type: </label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="dvd">Dvd</option>
                <option value="bluray">Blu-ray</option>
                <option value="musc">Music</option>
                <option value="data">Data</option>
              </select>
            </div>
          </div>

          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group mb-3">
              <div class="input-group-append w-100">
                <span class="input-group-text"><label for="MAINFEATURE">Main Feature: </label></span>
                <div class="input-group-text w-100">
                  <input class="switch" id="MAINFEATURE" name="MAINFEATURE" type="checkbox" value="y">
                </div>
              </div>
            </div>
          </div>

          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Minimum Length: </span>
              </div>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>

            <div class="invalid-tooltip" id="MINLENGTH_INVALID">
              errors
            </div>
          </div>

          <div class="input-group mb-3 flex-nowrap">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Maximum Length: </span>
              </div>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>

            <div id="MAXLENGTH_INVALID" class="invalid-tooltip">
              Title can't be blank
            </div>
          </div>
          <input name="mode" value="change_job_params" hidden>
          <input name="config_id" value="{{ job.CONFIG_ID }}" hidden>
          <button class="btn btn-info btn-lg btn-block" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>

  {{ conf }}

</template>

<style scoped>
div input {
  display: block;
  width: 100%;
  height: initial;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-border-top-right-radius: 3px;
  -webkit-border-bottom-right-radius: 3px;
  -moz-border-radius-topright: 3px;
  -moz-border-radius-bottomright: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

div.input-group input, div.input-group select {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
  display: block;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>