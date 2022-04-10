<template>
    <div>
        <component :is="defaults[0]" />
        <component :is="defaults[1]" />
        <component :is="defaults[2]" />
    </div>
</template>

<script lang="ts">

export default {
    setup(props, context) {
        const defaults = context.slots.default()
        console.log(defaults)
        return {
            defaults
        }
    }
}
</script>