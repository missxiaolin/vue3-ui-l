<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let content: any = ref<string>(null);
    import(props.path).then((res: any) => {
        content.value = res.default
    })
    return {
        content
    }
  },
};
</script>
