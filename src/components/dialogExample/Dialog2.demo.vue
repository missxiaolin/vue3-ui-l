<demo>一键打开</demo>
<template>
<Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import Button from '../../lib/button/index.vue'
import { openDialog } from '../../lib/openDialog.ts'
import {
    ref
} from 'vue';
export default {
    components: {
        Button
    },
    setup() {
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '这是一段内容',
                maskClosable: false,
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {
            showDialog
        }
    }
}
</script>
