import { createWebHashHistory, createRouter } from "vue-router";
import Index from "../view/index/index.vue";
import Swish from "../view/swish/index.vue";
import Button from "../view/button/index.vue";
import Tabs from "../view/tabs/index.vue";
import Dialog from "../view/dialog/index.vue";
import Intro from "../view/intro/index.vue";
import Doc from '../view/doc/index.vue'

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
  ],
});


export default router;
