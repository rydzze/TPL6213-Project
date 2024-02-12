import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import BasicPy4bii from './views/basic-py-4bii'
import BasicPy3aiii from './views/basic-py-3aiii'
import BasicPy4 from './views/basic-py-4'
import BasicPy2d from './views/basic-py-2d'
import BasicPy3bii from './views/basic-py-3bii'
import SampleAppInventory from './views/sample-app-inventory'
import BasicPy1d from './views/basic-py-1d'
import BasicPy2a from './views/basic-py-2a'
import Bg6 from './views/bg-6'
import BasicPy2cii from './views/basic-py-2cii'
import Bg5 from './views/bg-5'
import BasicPy4bv from './views/basic-py-4bv'
import BasicPy4biv from './views/basic-py-4biv'
import SampleAppPurchases from './views/sample-app-purchases'
import BasicPy1a from './views/basic-py-1a'
import BasicPy2g from './views/basic-py-2g'
import Bg3 from './views/bg-3'
import SampleAppSales from './views/sample-app-sales'
import SampleAppIntro from './views/sample-app-intro'
import BasicPy3ai from './views/basic-py-3ai'
import BasicPy3bi from './views/basic-py-3bi'
import BasicPy4aii from './views/basic-py-4aii'
import BasicPy1b from './views/basic-py-1b'
import BasicPy2f from './views/basic-py-2f'
import BasicPy1e from './views/basic-py-1e'
import BasicPy3aii from './views/basic-py-3aii'
import BasicPy2ci from './views/basic-py-2ci'
import BasicPy4biii from './views/basic-py-4biii'
import BasicPy2e from './views/basic-py-2e'
import BasicPy3 from './views/basic-py-3'
import BasicPy1 from './views/basic-py-1'
import TrainingVideo from './views/training-video'
import Bg2 from './views/bg-2'
import BasicPy4ai from './views/basic-py-4ai'
import BasicPy1c from './views/basic-py-1c'
import BasicPy2 from './views/basic-py-2'
import Maintenance from './views/maintenance'
import BasicPy1f from './views/basic-py-1f'
import Home from './views/home'
import Bg1 from './views/bg-1'
import BasicPy2b from './views/basic-py-2b'
import SampleAppSuppliers from './views/sample-app-suppliers'
import Bg4 from './views/bg-4'
import BasicPy4bi from './views/basic-py-4bi'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'basic-py-4bii',
      path: '/basic-py-4bii',
      component: BasicPy4bii,
    },
    {
      name: 'basic-py-3aiii',
      path: '/basic-py-3aiii',
      component: BasicPy3aiii,
    },
    {
      name: 'basic-py-4',
      path: '/basic-py-4',
      component: BasicPy4,
    },
    {
      name: 'basic-py-2d',
      path: '/basic-py-2d',
      component: BasicPy2d,
    },
    {
      name: 'basic-py-3bii',
      path: '/basic-py-3bii',
      component: BasicPy3bii,
    },
    {
      name: 'sample-app-inventory',
      path: '/sample-app-inventory',
      component: SampleAppInventory,
    },
    {
      name: 'basic-py-1d',
      path: '/basic-py-1d',
      component: BasicPy1d,
    },
    {
      name: 'basic-py-2a',
      path: '/basic-py-2a',
      component: BasicPy2a,
    },
    {
      name: 'bg-6',
      path: '/background-6',
      component: Bg6,
    },
    {
      name: 'basic-py-2cii',
      path: '/basic-py-2cii',
      component: BasicPy2cii,
    },
    {
      name: 'bg-5',
      path: '/background-5',
      component: Bg5,
    },
    {
      name: 'basic-py-4bv',
      path: '/basic-py-4bv',
      component: BasicPy4bv,
    },
    {
      name: 'basic-py-4biv',
      path: '/basic-py-4biv',
      component: BasicPy4biv,
    },
    {
      name: 'sample-app-purchases',
      path: '/sample-app-purchases',
      component: SampleAppPurchases,
    },
    {
      name: 'basic-py-1a',
      path: '/basic-py-1a',
      component: BasicPy1a,
    },
    {
      name: 'basic-py-2g',
      path: '/basic-py-2g',
      component: BasicPy2g,
    },
    {
      name: 'bg-3',
      path: '/background-3',
      component: Bg3,
    },
    {
      name: 'sample-app-sales',
      path: '/sample-app-sales',
      component: SampleAppSales,
    },
    {
      name: 'sample-app-intro',
      path: '/sample-app-intro',
      component: SampleAppIntro,
    },
    {
      name: 'basic-py-3ai',
      path: '/basic-py-3ai',
      component: BasicPy3ai,
    },
    {
      name: 'basic-py-3bi',
      path: '/basic-py-3bi',
      component: BasicPy3bi,
    },
    {
      name: 'basic-py-4aii',
      path: '/basic-py-4aii',
      component: BasicPy4aii,
    },
    {
      name: 'basic-py-1b',
      path: '/basic-py-1b',
      component: BasicPy1b,
    },
    {
      name: 'basic-py-2f',
      path: '/basic-py-2f',
      component: BasicPy2f,
    },
    {
      name: 'basic-py-1e',
      path: '/basic-py-1e',
      component: BasicPy1e,
    },
    {
      name: 'basic-py-3aii',
      path: '/basic-py-3aii',
      component: BasicPy3aii,
    },
    {
      name: 'basic-py-2ci',
      path: '/basic-py-2ci',
      component: BasicPy2ci,
    },
    {
      name: 'basic-py-4biii',
      path: '/basic-py-4biii',
      component: BasicPy4biii,
    },
    {
      name: 'basic-py-2e',
      path: '/basic-py-2e',
      component: BasicPy2e,
    },
    {
      name: 'basic-py-3',
      path: '/basic-py-3',
      component: BasicPy3,
    },
    {
      name: 'basic-py-1',
      path: '/basic-py-1',
      component: BasicPy1,
    },
    {
      name: 'training-video',
      path: '/training-video',
      component: TrainingVideo,
    },
    {
      name: 'bg-2',
      path: '/background-2',
      component: Bg2,
    },
    {
      name: 'basic-py-4ai',
      path: '/basic-py-4ai',
      component: BasicPy4ai,
    },
    {
      name: 'basic-py-1c',
      path: '/basic-py-1c',
      component: BasicPy1c,
    },
    {
      name: 'basic-py-2',
      path: '/basic-py-2',
      component: BasicPy2,
    },
    {
      name: 'maintenance',
      path: '/',
      component: Maintenance,
    },
    {
      name: 'basic-py-1f',
      path: '/basic-py-1f',
      component: BasicPy1f,
    },
    {
      name: 'Home',
      path: '/strace',
      component: Home,
    },
    {
      name: 'bg-1',
      path: '/background-1',
      component: Bg1,
    },
    {
      name: 'basic-py-2b',
      path: '/basic-py-2b',
      component: BasicPy2b,
    },
    {
      name: 'sample-app-suppliers',
      path: '/sample-app-suppliers',
      component: SampleAppSuppliers,
    },
    {
      name: 'bg-4',
      path: '/background-4',
      component: Bg4,
    },
    {
      name: 'basic-py-4bi',
      path: '/basic-py-4bi',
      component: BasicPy4bi,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
