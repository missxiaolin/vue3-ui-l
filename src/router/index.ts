import { createWebHashHistory, createRouter } from "vue-router";
import Index from "../view/index/index.vue";
import Swish from "../view/swish/index.vue";
import Button from "../view/button/index.vue";
import Tabs from "../view/tabs/index.vue";
import Dialog from "../view/dialog/index.vue";
import Intro from "../view/intro/index.vue";
import Doc from "../view/doc/index.vue";
import { h } from "vue";
import Markdown from "../markdown/Markdown.vue";
import mD from "../markdown/mD.vue";
import install from "../markdown/install.md";
const md = (content: string, key: string) => {
  return h(mD, { content, key });
};

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/swish",
      component: Swish,
    },
    {
      path: "/button",
      component: Button,
    },
    {
      path: "/tabs",
      component: Tabs,
    },
    {
      path: "/dialog",
      component: Dialog,
    },
    {
      path: "/doc/install",
      component: Intro,
    },
    {
      path: "/doc/install/cs",
      component: md(install, "install"),
    },
    {
      path: "/doc/install/cs1",
      component: h(Markdown, {
        path: './install.md'
      }),
    },
  ],
});

export default router;
