<template>
  <div class="crisps-tabs">
    <div class="crisps-tabs-nav" ref="container">
      <div
        class="crisps-tabs-nav-item"
        :class="{
          selected: t.title === value,
          'crisps-tabs-nav-disabled': t.disabled,
        }"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          (el) => {
            if (t.title === value) selectedItem = el;
          }
        "
      >
        {{ t.title }}
      </div>
      <div class="crisps-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="crisps-tabs-content">
      <component v-for="(c, index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "../tab/index.vue";

export default {
  props: {
    value: {
      type: String,
    },
  },
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


<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.crisps-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }

      &.crisps-tabs-nav-disabled {
        color: #ccc;
        cursor: not-allowed;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 250ms, width 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
