import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/Pages/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/Pages/About.vue')
  },
  {
    path: '/massages',
    name: 'massages',
    component: () => import( '../views/Massages/Index.vue')
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import( '../views/Massages/Sportsmassage.vue')
  },
  {
    path: '/swedish',
    name: 'swedish',
    component: () => import( '../views/Massages/Swedish.vue')
  },
  {
    path: '/reflexiology',
    name: 'reflexiology',
    component: () => import( '../views/Massages/Reflexiology.vue')
  },
  {
    path: '/aromatherapy',
    name: 'aromatherapy',
    component: () => import( '../views/Massages/Aromatherapy.vue')
  },
  {
    path: '/cupping',
    name: 'cupping',
    component: () => import( '../views/Massages/Cupping.vue')
  },
  {
    path: '/body-services',
    name: 'body-services',
    component: () => import( '../views/Bodyservices/Index.vue')
  },
  {
    path: '/facial-treatment',
    name: 'facial-treatment',
    component: () => import( '../views/Bodyservices/Facialtreatment.vue')
  },
  {
    path: '/breasts-lifting',
    name: 'breasts-lifting',
    component: () => import( '../views/Bodyservices/BreastLifting.vue')
  },
  {
    path: '/tummy-reduction',
    name: 'tummy-reduction',
    component: () => import( '../views/Bodyservices/TummyReduction.vue')
  },
  {
    path: '/foot-detox',
    name: 'foot-detox',
    component: () => import( '../views/Bodyservices/FootDetox.vue')
  },
  {
    path: '/butt-enlargement',
    name: 'butt-enlargement',
    component: () => import( '../views/Bodyservices/ButtEnlargement.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import( '../views/Shop/Index.vue')
  },
  {
    path: '/mpesu',
    name: 'mpesu',
    component: () => import( '../views/Shop/Products/Mpesu.vue')
  },
  {
    path: '/guava-leaves',
    name: 'guavaleaves',
    component: () => import( '../views/Shop/Products/Guavaleaves.vue')
  },
  {
    path: '/flat-tummy-solutions',
    name: 'flattummy',
    component: () => import( '../views/Shop/Products/Tummysolutions.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import( '../views/Pages/Blog.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/Pages/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/auth/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
