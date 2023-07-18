<script setup>

</script>

<template>
  {% block apprise %}
  <div class="tab-pane pt-5" id="appriseTab" role="tabpanel" aria-labelledby="apprise-tab">
    <form id="appriseCfg" name="appriseCfg" method="post" action="">
      {% for k, v in apprise_cfg.items() %}
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="{{ k }}">{{ k }}: </span>
        </div>
        <input type="text" class="form-control" aria-label="{{ k }}" name="{{ k }}" placeholder="{{ v }}"
               value="{{ v }}" aria-describedby="{{ k }}">
        <a class="popovers" onClick='return false;' href="" data-content="{{ jsoncomments[k]| replace(" #", "\n")
        }}" rel="popover" data-placement="top" data-original-title="{{ k }}">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More Info">
        </a>
      </div>
      {% endfor %}
      <button id="apprise_cfg" class="btn btn-secondary btn-lg btn-block" form="appriseCfg"
              type="submit">Submit
      </button>
    </form>
  </div>
  {% endblock %}

</template>

<style scoped>

</style>