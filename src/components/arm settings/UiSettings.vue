<script>
import axios from "axios";

export default {
  data() {
    return {
      ui_settings: [],
      jsoncomments:[],
      arm_API: this.armapi
    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(
            this.arm_API + "/json?mode=get_ui_conf"
        );
        // JSON responses are automatically parsed.
        this.ui_settings = response.data.cfg;
        this.jsoncomments = response.data.comments
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>

<template>
  <div class="tab-pane p-5" id="uiSettingsTab" role="tabpanel" aria-labelledby="uiSettings-tab">
    <form id="uiSettings" name="uiSettings" action="">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="index_refresh">index_refresh: </span>
        </div>
        <input type="text" class="form-control" aria-label="index_refresh"
               name="index_refresh" placeholder="" v-bind:value="ui_settings.index_refresh"
               aria-describedby="index_refresh">
        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['index_refresh']"
        rel="popover"
        data-placement="top" data-original-title="index_refresh">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="notify_refresh">Notification Timeout: </span>
        </div>
        <input type="text" class="form-control" aria-label="notify_refresh"
               name="notify_refresh" placeholder="" v-bind:value="ui_settings.notify_refresh"
               aria-describedby="notify_refresh">
        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['notify_refresh']"
        rel="popover"
        data-placement="top" data-original-title="notify_refresh">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="use_icons">use_icons: </span>
        </div>
        <input type="text" class="form-control" aria-label="use_icons" name="use_icons"
               v-bind:value="ui_settings.use_icons">

        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['use_icons']" rel="popover"
        data-placement="top" data-original-title="use_icons">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
                    <span class="input-group-text"
                          id="save_remote_images">save_remote_images: </span>
        </div>
        <input type="text" class="form-control" aria-label="save_remote_images"
               name="save_remote_images" v-bind:value="ui_settings.save_remote_images">
        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['save_remote_images']"
        rel="popover"
        data-placement="top" data-original-title="save_remote_images">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="bootstrap_skin">bootstrap_skin: </span>
        </div>
        <input type="text" class="form-control" aria-label="bootstrap_skin"
               name="bootstrap_skin" placeholder="" v-bind:value="ui_settings.bootstrap_skin"
               aria-describedby="bootstrap_skin">
        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['bootstrap_skin']"
        rel="popover"
        data-placement="top" data-original-title="bootstrap_skin">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="language">language: </span>
        </div>
        <input type="text" class="form-control" aria-label="language" name="language"
               placeholder="" v-bind:value="ui_settings.language"
               aria-describedby="language">
        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['language']" rel="popover"
        data-placement="top" data-original-title="language">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="database_limit">database_limit: </span>
        </div>
        <input type="text" class="form-control" aria-label="database_limit"
               name="database_limit" placeholder="" v-bind:value="ui_settings.database_limit"
               aria-describedby="database_limit">
        <a class="popovers" onClick='return false;' href=""
           v-bind:data-content="jsoncomments['database_limit']"
        rel="popover"
        data-placement="top" data-original-title="database_limit">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More info">
        </a>
      </div>
      <button id="uiSubmit" class="btn btn-secondary btn-lg btn-block" form="uiSettings"
              type="submit">
        Submit
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>