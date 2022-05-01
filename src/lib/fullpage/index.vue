<template>
  <div class="page" ref="page">
    <section>
      <div class="circle">1</div>
    </section>
    <section>
      <div class="circle">2</div>
    </section>
    <section>
      <div class="circle">3</div>
    </section>
    <section>
      <div class="circle">4</div>
    </section>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import FullPage from '../utils/fullpage'

export default {
    setup() {
        const page = ref()
        onMounted(() => {
            new FullPage({
                element: page
            })
        })
    }
};
</script>


<style lang="scss" scoped>
body {
  margin: 0;
  color: #0f0e0d;
}
.page {
  height: 100vh;
}
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20vh;
}
section:nth-child(1) {
  background: #f1af22;
}
section:nth-child(2) {
  background: #356ada;
}
section:nth-child(3) {
  background: #d82220;
}
section:nth-child(4) {
  background: #08aa37;
}
</style>