<template>
  <div class="card">
    <div class="image-picker">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653657652&t=46a8f2abd3f9a62ed16f068782e004ce"
        width="100"
        height="100"
      />
    </div>
    <p>点击图片编辑</p>
  </div>
</template>


<script lang="ts">
import { onMounted } from "vue";
import ImagePicker from "../utils/image";

export default {
  setup() {
    onMounted(() => {
      new ImagePicker({
        element: document.querySelector(".image-picker"),
        upload: {
          url: "https://baidu.com/image-server/upload",
          method: "PUT",
          inputName: "file",
        },
        parseResponse: (response) => {
          response = JSON.parse(response);
          return `https://baidu.com/image-server/upload/${response.key}`;
        },
        fallbackImage:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653657652&t=46a8f2abd3f9a62ed16f068782e004ce",
      });
    });
  },
};
</script>

<style lang="scss">
.card {
  background: white;
  width: 20em;
  height: 80vh;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.95);
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3em;
  flex-direction: column;
}
.image-picker {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.image-picker::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset 0 0 5px hsla(264, 46%, 23%, 0.5);
  color: white;
  ustify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 100px;
  text-align: center;
}
.image-picker:hover::after {
  content: "编辑";
  background: hsla(0, 0%, 0%, 0.2);
}
.image-picker > img {
  max-width: 100%;
  max-height: 100%;
}
.image-picker > input[type="file"] {
  position: absolute;
  right: 0;
  top: 0;
  width: 300%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
}
.image-picker.uploading::after {
  content: "上传中";
  background: hsla(0, 0%, 0%, 0.2);
}
.image-picker.downloading::after {
  content: "处理中";
  background: hsla(0, 0%, 0%, 0.2);
}
</style>