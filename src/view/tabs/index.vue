<template>
    <Tabs v-model:value="name">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
    <br />
    <Tabs v-model:value="name">
        <Tab title="导航1">内容1</Tab>
        <Tab disabled title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
</template>


<script lang="ts">
import Tabs from '../../lib/tabs/index.vue'
import Tab from '../../lib/tab/index.vue'
import {
    ref
} from 'vue';

export default {
    components: {
        Tab,
        Tabs
    },
    setup() {
        const name = ref("导航1");
        return {
            name
        }
    }
}
</script>