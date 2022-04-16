<template>
    <article class="markdown-body" v-html="md">
    </article>
    <MarkDown path="../markdown/install.md" />
</template>

<script lang="ts">
import md from '../../markdown/install.md'
import MarkDown from '../../markdown/Markdown.vue'

export default {
    components: {
        MarkDown
    },
    data() {
        return {
            md
        }
    }
}
</script>