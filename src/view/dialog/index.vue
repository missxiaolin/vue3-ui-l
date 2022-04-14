<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog
      :ok="clickOk"
      :cancel="clickCancel"
      :maskClosable="true"
      v-model:visible="isVisible"
    >
      <template v-slot:title>
        <strong>这是一个提示</strong>
      </template>
      <template v-slot:content>
        <div>薯片！</div>
        <div>好吃！</div>
      </template>
    </Dialog>
    <br />
    <Button @click="showDialog">toggle</Button>
  </div>
</template>

<script>
import Button from "../../lib/button/index.vue";
import Dialog from "../../lib/dialog/index.vue";
import { openDialog } from '../../lib/index.ts'
import { ref } from "vue";

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const isVisible = ref(false);
    const toggle = () => {
      isVisible.value = !isVisible.value;
    };
    const clickOk = () => {
      return true;
    };
    const clickCancel = () => {};

    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "这是一段内容",
        maskClosable: false,
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      isVisible,
      toggle,
      clickOk,
      clickCancel,

      showDialog,
    };
  },
};
</script>