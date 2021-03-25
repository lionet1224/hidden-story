import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/project'),
    children: [
      {
        path: '',
        name: 'projectHome',
        component: () => import('../views/project/home')
      },
      {
        path: 'detail/:pid',
        name: 'projectDetail',
        meta: {
          back: true,
          title: '项目详情'
        },
        component: () => import('../views/project/detail')
      },
      {
        path: 'detail/:pid/:vid',
        name: 'versionDetail',
        meta: {
          back: true,
          title: '版本详情'
        },
        component: () => import('../views/version/detail')
      },
      {
        path: 'version/create/:pid',
        name: 'versionCreate',
        meta: {
          back: true,
        },
        component: () => import('../views/version/create')
      },
      {
        path: 'update/:pid',
        name: 'projectUpdate',
        meta: {
          back: true,
          title: '项目修改'
        },
        component: () => import('../views/project/update')
      },
      {
        path: 'create',
        name: 'projectCreate',
        meta: {
          back: true,
        },
        component: () => import('../views/project/create')
      }
    ]
  },
  {
    path: '/assets',
    name: 'assets',
    component: () => import('../views/assets')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      back: true,
      title: '异次元'
    },
    component: () => import('../views/status/404')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
