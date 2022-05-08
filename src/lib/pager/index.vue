<template>
  <div>
    <p>这个分页器会在控制台打印出页数</p>
    <div class="pager" ref="p"></div>
  </div>
  <div>
    <p>这个分页器会改变 url</p>
    <div class="pager" ref="ps"></div>
  </div>
</template>

<script lang="ts">
import Pager from "../utils/pager";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const p: any = ref();
    const ps: any = ref();

    onMounted(() => {
      new Pager({
        element: p.value,
        currentPage: 1,
        totalPage: 200,
      });
      p.value.addEventListener("pageChange", (e) => {
        console.log(e.detail.page);
      });
    });

    return {
      p,
      ps,
    };
  },
};
</script>

<style>
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
body {
  text-align: center;
}

.pager {
  display: inline-flex;
  padding: 1px;
  margin: 0.5em 0;
  background: linear-gradient(to bottom, #969696 0%, #c1c1c1 100%);
  border-radius: 4px;
  box-shadow: 0 1px 0 white;
}
.pager > nav {
  display: flex;
  align-items: center;
  padding: 3px;
  background: #d4d4d4;
  border-radius: 2px;
  border-radius: 4px;
  box-shadow: inset 0 0 3px hsla(0, 0%, 0%, 0.1);
}
.pager > nav > ol[data-role="pageNumbers"] {
  display: flex;
}
.pager > nav > ol[data-role="pageNumbers"] > li,
.pager > nav > button {
  font: inherit;
  padding: 0 0.3em;
  border: none;
  min-width: 1.4em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(to bottom, white 0%, #dedede 100%);
  margin: 0.2em;
  border-radius: 4px;
  box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.5), inset 0 1px 1px white;
}

.pager > nav > ol[data-role="pageNumbers"] > li {
  cursor: default;
}
.pager > nav > ol[data-role="pageNumbers"] > li.current {
  background: linear-gradient(to bottom, #dadada 0%, #d0d0d0 100%);
  margin: 0.2em;
}
</style>