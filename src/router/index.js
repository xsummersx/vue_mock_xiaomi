import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import index from '../views/index.vue'
import product from '../views/product.vue'
import detail from '../views/product.vue'
import cart from '../views/cart.vue'
import order from '../views/order.vue'
import orderConfirm from '../views/orderConfirm.vue'
import orderList from '../views/orderList.vue'
import orderPay from '../views/orderPay.vue'
import Alipay from '../views/alipay.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index,
        },
        {
          path: '/product',
          name: 'product',
          component: product,
        },
        {
          path: '/detail/',
          name: 'detail',
          component: detail,
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children: [
        {
          path: '/list',
          name: 'order-list',
          component: orderList,
        },
        {
          path: '/confirm',
          name: 'order-confirm',
          component: orderConfirm,
        },
        {
          path: '/pay',
          name: 'order-pay',
          component: orderPay,
        },
        {
          path: '/alipay',
          name: 'alipay',
          component: Alipay,
        },
      ],
    },
  ],
})
