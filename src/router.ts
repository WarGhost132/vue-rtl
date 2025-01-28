import {createMemoryHistory, createRouter} from 'vue-router'

import InventoryPage from './modules/inventory/views/InventoryPage.vue'

const routes = [
  {
    path: '/',
    component: InventoryPage
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
