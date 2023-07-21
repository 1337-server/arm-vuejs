<script>
import axios from "axios";

export default {
  data() {
    return {
      liveConfig: [],
      jsoncomments:[],
      arm_API: this.armapi
    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(
            this.arm_API + "/json?mode=get_apprise"
        );
        // JSON responses are automatically parsed.
        this.liveConfig = response.data.cfg;
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
  <div class="tab-pane p-5" id="appriseTab" role="tabpanel" aria-labelledby="apprise-tab">
    <form id="appriseCfg" name="appriseCfg" method="post" action="">
      <div v-for="(v, k) in liveConfig" key="index" class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" v-bind:id="k">{{ k }}: </span>
        </div>
        <input type="text" class="form-control" v-bind:aria-label="k" v-bind:name="k" v-bind:placeholder="v"
               v-bind:value="v" v-bind:aria-describedby="k">
        <a class="popovers" onClick='return false;' href="" v-bind:data-content="jsoncomments[k]" rel="popover" data-placement="top" v-bind:data-original-title="k">
        <img title="More information" src="/src/assets/img/info.png" width="30px"
             height="35px" alt="More Info">
        </a>
      </div>
      <button id="apprise_cfg" class="btn btn-secondary btn-lg btn-block" form="appriseCfg"
              type="submit">Submit
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>