<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <div class="crisps-tabs-content">
      <component v-for="(c, index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "../tab/index.vue";

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs 子标签必须为 Tab");
      }
    });
    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });
    return {
      titles,
      defaults,
    };
  },
};
</script>