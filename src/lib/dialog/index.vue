<template>
    <div>
        Dialog
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        maskClosable: {
            type: Boolean,
            default: true,
        },
        ok: {
            type: Function,
        },
        cancel: {
            type: Function,
        },
    },
}
</script>