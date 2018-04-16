import Vue from 'vue'
const types={
    edit_product:'edit_product',
    fetchMyProducts:'fetchMyProducts',
    fetchUserProducts:'fetchUserProducts',
}
const products={
    namespaced: true,
     state:{
          products:[],
          edit_product:{category_id:''},
     mutations: { 
         [types.set_products](state,data){
            state.products=data
         },
         [types.delete_product](state,data){
             state.products.data=state.products.data.filter((item)=>{
                 return item!==data
             })
         },
         [types.edit_product](state,data){
             let product=data
                state.edit_product=product
                // Object.defineProperty(
                //     state.edit_product,
                //     'category_id',
                //     {value:product.categories[0].id})
                 
                
                 
         },
         [types.fetchMyProducts](state,data){
         [types.fetchUserProducts](state,data){
             state.products=data
         },
         [types.set_store_info](state,data){
   },
     actions: { 
      
        fetchProducts({commit},{page,method_name,keyword='',selectSchoolID,category_id=''}){
            Vue.axios.get(`/product?page=${page}&method_name=${method_name}&selectSchoolID=${selectSchoolID}&category_id=${category_id}&keyword=${keyword}`)
            })
        },
        deleteProduct({commit},product){
        },
        editProduct({commit},source){
               Vue.axios.get(source)
            .then(({data})=>{
                commit(types.edit_product,data)
            })
            

        },
        fetchMyProducts({commit},{page,method_name}){
            Vue.axios.get(`/mystore?page=${page}&method_name=${method_name}`)
            })
        },
        fetchUserProducts({commit},{user_account,pagination}){
            Vue.axios.get(`/userstore/${user_account}?page=${pagination.page}`)
          .then(({data})=>{
              
         commit(types.fetchUserProducts,data.model)

             })
        }
     }
   ,
   getters:{
     getProducts(state){return state.products},
       let products=state.products.data
  let arr=new Array();
       for(let key in products){
       }
        return  arr.filter(item=>item.qty===0)


        //  return  products.filter(item=>item.qty===0)
    }
   }
export default products