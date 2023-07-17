<template>
  <div class="row d-flex justify-content-end">
    <div class="p-4">
      <button id="save-get-success" type="button" class="btn btn-secondary btn-success">Get all successful
        jobs
      </button>
      <button id="save-get-failed" type="button" class="btn btn-secondary btn-danger">Get all failed jobs
      </button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              data-type="search" data-href="json?mode=search&q=">Search Database
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Buttons'
}
</script>