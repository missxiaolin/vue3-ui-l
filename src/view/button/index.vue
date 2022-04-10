<template>
    <div>
        <Button theme="button" @click="onClick" :loading="true">你好</Button>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/button/index.vue'
export default {
    components: {
        Button
    },
    setup() {
        let onClick = () => {
            alert('测试')
        }

        return {
            onClick
        }
    }
}
</script>

<style lang="sass" scoped>

</style>