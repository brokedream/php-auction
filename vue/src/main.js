// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/index'
import axios from 'axios'
import vueaxios from 'vue-axios'
import VueSweetAlert from 'vue-sweetalert'
import Auth from './components/auth/auth.js'
import VueEcho from 'vue-echo'
const io = window.io = require('socket.io-client');

Vue.use(VueSweetAlert)
Vue.config.productionTip = false
Vue.use(vueaxios,axios)
Vue.use(VueEcho,{
    broadcaster: 'socket.io',
  auth:{headers:{
    Authorization:Vue.auth.getToken()
  }}

})

Vue.axios.interceptors.request.use(config=>{
// Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
if(Vue.auth.getToken()){
  
config.headers['Authorization']=Vue.auth.getToken()
// config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}
return config
})
Vue.axios.interceptors.response.use(undefined,err=>{
  if(err.response.status==401){
    Vue.auth.destroyLogin()
    router.push({name:'login'})
  }
})
// Vue.axios.defaults.baseURL="http://114.33.199.92:8080/laravel/ProductSale/public/api/"

 router.beforeEach((to, from, next) => {
  if(to.matched.some(record=>record.meta.forVisitors))
  {
        next()
      }
  }else{
    if(to.matched.some(record=>record.meta.forAuth)){
        next()
      }else{
        next({name:'hello'})
    }else{
      next()
      
    }
  } 
})
new Vue({
  el: '#app',
  router,
  store,
  componens: { App },
 
})
