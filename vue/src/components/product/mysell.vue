<template>
  <div class="container">
      <div class="row">
       <pagination @fetchProducts="fetchProducts"  :last_page="products.last_page" :method_name=method_name></pagination>
 
        【{{product.categories[0].name}}】
        </div>
      <div v-if="product.user_id==$auth.getUser().id" class="text-right text-danger">
          <button @click="deleteProduct(product)" class="btn btn-danger">x</button>
          <router-link tag="button" class="btn btn-primary" :to="{name:'product_edit',params:{pid:product.id}}">俢改</router-link>
          </div>
      <img :src="product.img" alt="">
     <div class="caption">
        <h3>{{product.name}}</h3>
        <p>{{product.description}}</p>
        <span class="text-waring">${{product.price}} </span>
        <div class="" v-if="product.qty>0">數量{{product.qty}} </div>
       <div class="" v-else>
        <span class="text-danger">售完</span>

       </div>
        
      </div>
         <button class="btn btn-primary" @click="showinput(product)">詢問/商品留言</button>
    </div>
  </div>
  <div class="row">
           <modal title="Modal Title" :show="OpenModal" @cancel="cancel">
          <div class="form-group"><input type="text" v-model="question_content" name="" id="" class="form-control"></div>
          <button class="btn btn-primary" @click="sendQuestion">送出訊息</button>

 <div class="media" v-for="question in questions">
  <a class="media-left media-middle" href="#">
  </a>
  <div class="media-body">
    <h4 class="media-heading">{{question.account}}</h4>
    <div class="ask">
        <div>
         {{question.content}}
        </div>
    </div>
    <div class="date">
        {{question.created_at}}
    </div>
  </div>
</div>

<pagination @fetchProducts="questionPage" :passpage="question_page" :last_page="question_info.last_page"></pagination>


</modal>
  </div>
</div>
</template>
<script>
import {mapActions,mapGetters,mapState} from 'vuex'
import pagination from '../pagination'
import modal from'@/components/plugin/Modal.vue'
    export default{
        beforeMount(){
            this.fetchProducts()
        },
        data(){
            return{
                method_name:'fetchMyProducts',
                 OpenModal:false,
                questions:[{}],
                question_info:{},
                 question_content:'',

            }
        },
      
      methods:{
             questionPage(pagination){
            this.question_page=pagination.page
            
            this.fetchQuestion(this.selectProduct)
            
          },
          cancel(){
                this.OpenModal=false
            
          },
          showinput(product){
                this.question_page=1
              
            this.OpenModal=!this.OpenModal
            if(this.OpenModal==true){
            this.fetchQuestion(product)
            }
          },
          fetchQuestion(product){
              this.selectProduct=product
            .then(({data})=>{
                delete data.data
            })
          },
          sendQuestion(){
            this.axios.post(`/question`,{product_id:this.selectProduct.id,account:this.$auth.getUser().account,content:this.question_content,seller_id:this.selectProduct.user_id})
            .then(({data})=>{
                this.$swal(data) 
                this.question_content=''
            this.fetchQuestion(this.selectProduct)
        })
          }
          ,
      filter_sell(method_name){
        this.method_name=method_name
        if(method_name=='sellout'){
            
    }else{
        
        }
        
      },
        //   ...mapActions('products',['fetchProducts'],this.page)
     
        fetchProducts(pagination={page:1,method_name:'fetchMyProducts'}){
            console.log(pagination)
            return this.$store.dispatch('products/fetchMyProducts',pagination)},
        deleteProduct(product){
            const that=this
            this.$swal({
  title: "確定要刪除?",
  type: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes,刪了它吧!",
  cancelButtonText: "No, 我按錯了!",

}).then(function(){
    that.$swal('刪了')});
        },
        purchase(product){
            if(this.$auth.isAuthenticate()){
                if(product.purchaseQty){
                    this.$store.dispatch('cart/addItem',product)
                    this.$swal('放進去了')
                }else{
                }
            
            }else{
            }
        
        }
      },
      computed:{
        //   ...mapGetters('products',['getProducts'])
      },
          pagination,
            modal
      }
    }
</script>
