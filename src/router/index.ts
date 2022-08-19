import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

interface Module{
  default: Array<RouteRecordRaw>
}

let routes: Array<RouteRecordRaw> = []

// import.meta.globEager('./routers/*.ts') 被废弃
const files = import.meta.glob('./routes/*.ts', { eager: true })

Object.keys(files).forEach((fileName: string) => {
  routes = routes.concat((files[fileName] as Module).default)
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})

export default router
