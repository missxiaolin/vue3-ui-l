import Dialog from "./dialog/index.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, ok, cancel, maskClosable } = options;
  const div: any = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          //属性
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok,
          cancel,
          maskClosable,
        },
        {
          //插槽
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
