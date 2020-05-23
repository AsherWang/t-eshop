import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product-list" */ '../views/Product'),
  },
  {
    path: '/product-show',
    name: 'ProductShow',
    component: () => import(/* webpackChunkName: "product-show" */ '../views/Product/show.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
