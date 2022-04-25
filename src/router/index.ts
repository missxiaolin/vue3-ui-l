import { createWebHashHistory, createRouter } from "vue-router";
import Index from "../view/index/index.vue";
import Home from '../view/home/index.vue'
import Swish from "../view/swish/index.vue";
import Button from "../view/button/index.vue";
import Tabs from "../view/tabs/index.vue";
import Dialog from "../view/dialog/index.vue";
import Intro from "../view/intro/index.vue";
import Doc from "../view/doc.vue";
import { h } from "vue";
import Markdown from "../markdown/Markdown.vue";
import mD from "../markdown/mD.vue";
import DemoButton from '../view/demo/button.vue'

import install from "../markdown/install.md";
import introduce from "../markdown/introduce.md";
import getStarted from '../markdown/get-started.md'

import SwishDemo from '../components/demo/SwitchDemo.vue'
import ButtonDemo from '../components/demo/ButtonDemo.vue'
import DialogDemo from '../components/demo/DialogDemo.vue'
import TabsDemo from '../components/demo/TabsDemo.vue'

const md = (content: string, key: string) => {
  return h(mD, { content, key });
};

const mdNew = filename => h(Markdown, {
  path: `./${filename}.md`,
  key: filename
})

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
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
    // {
    //   path: "/doc/install",
    //   component: Intro,
    // },
    // {
    //   path: "/doc/install/cs",
    //   component: md(install, "install"),
    // },
    // {
    //   path: "/doc/install/cs1",
    //   component: mdNew('install')
    // },
    {
      path: '/doc/btn/cs',
      component: DemoButton
    },
    {path: '/doc', component: Doc, children: [
      {
        path: '',
        redirect: '/doc/introduce'
      },
      {
        path: 'introduce',
        component: md(introduce, 'introduce')
      },
      {
        path: 'install',
        component: md(install, "install")
      },
      {
        path: 'get-started',
        component: md(getStarted, 'get-started')
      },
      {
        path: 'switch',
        component: SwishDemo
      },
      {
        path: 'button',
        component: ButtonDemo
      },
      {
        path: 'dialog',
        component: DialogDemo
      },
      {
        path: 'tabs',
        component: TabsDemo
      },
      
  ]}
  ],
});

export default router;
