
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../modules/contact/IndexPage.vue') },
      { path: '/about', component: () => import('../modules/about/pages/AboutRuta.vue') },
      // { path: '/some', component: () => import('pages/SomeRuta.vue') },
      // { path: '/productos', component: () => import('pages/ProductsForm.vue') },
      // { path: '/cards', component: () => import('pages/CardRoute.vue') },
      // { path: '/qcards', component: () => import('pages/CardQroute.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
