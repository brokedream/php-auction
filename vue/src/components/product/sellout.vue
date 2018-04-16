<template>
<div>
 <div class="panel panel-default" v-for="item in items">
        <div class="panel-heading">
            <span class="text-center">售出清單</span>
        </div>

   <table class="table table-striped " >
       <thead>
 <tr>
            <th>訂單管理</th>
            <th>訂單狀態</th>
            <th>訂單取消</th>
            </tr>
       </thead>
           
                <td>{{item.item_status[0].content}} </td>
                <td ><button class="btn btn-primary btn-xs" v-if="item.item_status[0].id==10" @click="statusConfirm(item,14)">同意退貨</button> </td>
                <td ><button class="btn btn-primary btn-xs" v-if="item.item_status[0].id==1||item.item_status[0].id==2||item.item_status[0].id==3" @click="statusConfirm(item,8)">要求取消交易</button> </td>
                
              
            </tr>
  </table>
               </div> 

     
  
  </div>
</div>
   
</template>
<script>
   export default{
       data(){
           return{
            items:[]
           }
       },
        beforeMount(){
      this.fetchData()
        
    },
    methods:{
          chat_select(buyer_id){
              this.axios.post('/addChatUser',{chat_id:buyer_id})
              .then(({data})=>{
                this.$router.push({name:'chat'})
            })
          },
        statusConfirm(item,status){

            this.axios.put(`/items/${item.id}`,{status:status})
            .then(({data})=>{
                console.log(data);
      this.fetchData()
                this.$router.push({redirect:{name:'sellout'}})
                })
            .catch((error)=>console.log(error.response))
        },
        fetchData(){
              this.axios.get(`/items`)
        .then(({data})=>{this.items=data;})
        }
    }
   }

</script>
