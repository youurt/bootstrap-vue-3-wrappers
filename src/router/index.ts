import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Buttons from '../views/Buttons.vue'
import Navbar from '../views/Navbar.vue'
import Modal from '../views/Modal.vue'
import Collapse from '../views/Collapse.vue'
import Alert from '../views/Alert.vue'
import Input from '../views/Input.vue'
import Grid from '../views/Grid.vue'
import Card from '../views/Card.vue'
import Dropdown from '../views/Dropdown.vue'
import FormGroup from '../views/FormGroup.vue'
import Form from '../views/Form.vue'
import Icons from '../views/Icons.vue'
import Overlay from '../views/Overlay.vue'
import FormRadio from '../views/FormRadio.vue'
import FormCheckBox from '../views/FormCheckBox.vue'
import FormFile from '../views/FormFile.vue'
import Toast from '../views/Toast.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: Collapse
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: Dropdown
  },
  {
    path: '/formgroup',
    name: 'FormGroup',
    component: FormGroup
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/overlay',
    name: 'Overlay',
    component: Overlay
  },
  {
    path: '/formradio',
    name: 'FormRadio',
    component: FormRadio
  },
  {
    path: '/formcheckbox',
    name: 'FormCheckBox',
    component: FormCheckBox
  },
  {
    path: '/formfile',
    name: 'FormFile',
    component: FormFile
  },
  {
    path: '/toast',
    name: 'Toast',
    component: Toast
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
