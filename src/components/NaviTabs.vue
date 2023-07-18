<template>
  <div>
    <ul style="list-style-type: none">
      <li v-for="(tab, index) in tabList" :key="index">
        <router-link :to="{path: tabLinks[index]}" :id="`${index}`">{{ tab }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    tabLinks:{
      type: Array,
      required: true
    },

    variant: {
      type: String,
      required: false
    },
  },

  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>

<style>
</style>