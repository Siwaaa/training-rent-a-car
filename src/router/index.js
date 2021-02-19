import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/:id',
    name: 'Car',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue'),
    children: [
      {
        // при совпадении пути с шаблоном /:id/profile
        // в <router-view> компонента User будет показан UserProfile
        path: 'specifications',
        name: 'Specifications',
        component: () => import(/* webpackChunkName: "about" */ '../components/DescriptionCar/Specifications.vue'),
      },
      {
        path: 'team',
        name: 'Team',
        component: () => import(/* webpackChunkName: "about" */ '../components/DescriptionCar/Team.vue'),
      },
      {
        path: 'rent',
        name: 'RentTerms',
        component: () => import(/* webpackChunkName: "about" */ '../components/DescriptionCar/RentTerms.vue'),
      }
    ]
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // }
]

const router = new VueRouter({
  base: '/training-rent-a-car/',
  routes
})

export default router
