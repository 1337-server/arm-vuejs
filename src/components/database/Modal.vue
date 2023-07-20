<template>
  <div class="modal fade show" aria-labelledby="exampleModalCenterTitle">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="searchlabel">Search </span>
            </div>
            <input type="text" class="form-control" id="searchquery" aria-label="searchquery"
                   name="searchquery" placeholder="Search...." value="" aria-describedby="searchlabel">
            <div id="validationServer03Feedback" class="invalid-feedback">
              Search string too short.
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="save-no" type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
          <button id="save-yes" type="button" class="btn btn-primary">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: false
  }
})
</script>
<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1050;
  display: flex;
  width: 50%;
  height: 50%;
  overflow: hidden;
  outline: 0;
  float: right;
}
</style>