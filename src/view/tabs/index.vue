<template>
    <Tabs>
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
</template>


<script lang="ts">
import Tabs from '../../lib/tabs/index.vue'
import Tab from '../../lib/tab/index.vue'

export default {
    components: {
        Tabs,
        Tab
    }
}
</script>