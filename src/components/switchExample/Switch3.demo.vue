<demo>
不可用状态
</demo>

<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../../lib/swish/index.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
