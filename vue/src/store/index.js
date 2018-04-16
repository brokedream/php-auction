
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/index'
import ratings from './ratings/index'

Vue.use(Vuex);

 const store=new Vuex.Store({
    state:{
        count:0
    mutations:{
        increment(state){
            state.count++
    },
    modules:{
        cart,
        ratings,
        chat
    }

})
export default store