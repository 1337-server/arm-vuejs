<template>
  <div class="row d-flex justify-content-end">
    <div class="p-4">
      <button id="save-get-success" type="button" class="btn btn-secondary btn-success" v-on:click="$emit('getSucc');" >Get all successful
        jobs
      </button>
      <button id="save-get-failed" type="button" class="btn btn-secondary btn-danger" v-on:click="$emit('getFail');">Get all failed jobs
      </button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="$emit('search');"
              data-type="search" data-href="json?mode=search&q=">Search Database
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Buttons',
  emits: ['update-modal', 'search', 'getSucc', 'getFail'],
}
</script>