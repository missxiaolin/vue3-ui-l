<template>
    <article class="markdown-body" v-html="md">
aaa
    </article>
</template>

<script lang="ts">
import md from '../../markdown/install.md'
console.log(md)
export default {
    data() {
        return {
            md
        }
    }
}
</script>