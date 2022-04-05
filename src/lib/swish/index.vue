<template>
  <button :class="{checked: x}" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const x = ref(false);
    const toggle = () => {
        x.value = !x.value
    }
    return {
      x,
      toggle
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 18px;
  width: 18px;
  background: white;
  border-radius: 11px;
}
button.checked {
    background: black;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>