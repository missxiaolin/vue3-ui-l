<template>
<h1>Button 按钮</h1>
<Demo :component="Button" />
</template>

<script lang="ts">
import Demo from '../../components/demo.vue'
import Button from './index.vue'
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Button
        }
    }
}
</script>
