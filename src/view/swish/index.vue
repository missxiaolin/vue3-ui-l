<template>
    <Swish v-model:value="y" :disabled="true" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Swish from '../../lib/swish/index.vue'

export default {
    components: {
        Swish
    },
    setup() {
        const y = ref(false)

        return {
            y
        }
    }
}
</script>

