<template>
  <div class="container">
      <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-default">
              <div class="panel-heading">
                 <h4 class="text-center">上傳產品</h4>
              </div>
              <div class="panel-body">
                 <form @submit.prevent="upload" class="form-horizontal">
                        <div class="form-group" :class="{'has-error':errors.name}">
                        <div class="col-sm-2">
                            <label for="">名稱</label>
                            
                        </div>
                        <div class="col-sm-10">
                            <input v-model="form.name" type="text" name="" id="" class="form-control ">
                        <span :class="{'text-danger':errors.name}">{{errors.name}} </span>
                            
                        </div>
                    </div>
                       <div class="form-group" :class="{'has-error':errors.description}">
                        <div class="col-sm-2">
                            <label for="">敘述</label>
                            
                        </div>
                        <div class="col-sm-10">
                            <textarea v-model="form.description" name="" id="" cols="30" rows="10" class="form-control"></textarea>
                        <span :class="{'text-danger':errors.description}">{{errors.description}} </span>
                            
                        </div>
                    </div>
                    <div class="form-group" :class="{'has-error':errors.price}">
                        <div class="col-sm-2">
                            <label for="">價格</label>
                            
                        </div>
                        <div class="col-sm-10">
                            <input v-model="form.price" type="text" name="" id="" class="form-control">
                        <span :class="{'text-danger':errors.price}">{{errors.price}} </span>
                            
                        </div>
                    </div>
                       <div class="form-group" :class="{'has-error':errors.price}">
                        <div class="col-sm-2">
                            <label for="">數量</label>
                            
                        </div>
                        <div class="col-sm-10">
                            <input v-model="form.qty" type="text" name="" id="" class="form-control">
                        <span :class="{'text-danger':errors.qty}">{{errors.qty}} 

                        </div>
                    </div>
            
                    <button class="btn btn-primary">送出</button>
                 </form>
                    
              </div>
          </div>
      </div>
  </div>
</template>
<script>
   export default{
        data(){
        return{
            method:'post',
            form:{
                name:'',
                description:'',
                price:'',
                qty:'1',
                
            },
            categories:[],
            errors:{

            },
            source:'/product',
            upload_source:'/product'
        }
    },
    beforeMount(){
        this.fetchCategoryList()
        if(this.$route.meta.edit){
            this.source=`/product/${this.$route.params.pid}/edit`
            this.$store.dispatch('products/editProduct',this.source)
            this.method='put'
            this.form.category_id='1'
        }
        
    }
    ,
    watch:{
        'getEditproduct':function(){
            this.form=this.getEditproduct
       
        }           
    },
    methods:{
        imgChg(e){
            var fr=new FileReader()
            fr.readAsDataURL(e.target.files[0])
            fr.onload=(e)=>{
                this.form.img=e.target.result
            }
        },
        upload(){
            this.axios[this.method](`${this.upload_source}`,this.form)
     
        }
        
    }

    
   }

</script>
