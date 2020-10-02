import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000
axios.interceptors.response.use((respnse) => {
  let res = respnse.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert("res.msg");
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')