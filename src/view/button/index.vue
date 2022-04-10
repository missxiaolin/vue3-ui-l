<template>
    <div>
        <Button>按钮</Button>
        <Button theme="link">按钮</Button>
        <Button theme="text">按钮</Button>
    </div>
    <br />
    <div>
        <Button size="big">Big</Button>
        <Button>Normal</Button>
        <Button size="small">Small</Button>
    </div>
    <div>
        <Button size="big" theme="link">Big Link</Button>
        <Button theme="link">Normal Link</Button>
        <Button size="small" theme="link">Small Link</Button>
    </div>
    <div>
        <Button size="big" theme="text">Big text</Button>
        <Button theme="text">Normal text</Button>
        <Button size="small" theme="text">Small text</Button>
    </div>
    <br />
    <div>
        <Button level="main">Primary</Button>
        <Button>Default</Button>
        <Button level="danger">Danger</Button>
    </div>
    <div>
        <Button theme="link" level="main">Primary link</Button>
        <Button theme="link">Default link</Button>
        <Button theme="link" level="danger">Danger link</Button>
    </div>
    <div>
        <Button theme="text" level="main">Primary text</Button>
        <Button theme="text">Default text</Button>
        <Button theme="text" level="danger">Danger text</Button>
    </div>
    <br />
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
    <br />
    <Button loading>Loading</Button>
    <Button @click="onClick" :loading="isLoading">Click me</Button>
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