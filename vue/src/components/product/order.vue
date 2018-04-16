<template>
<div class="container">
<pagination :method_name="method_name" @fetchProducts="fetchProducts"  :last
</ul>
    <div class="panel panel-default" v-for="order in orders ">
        <div class="panel-heading">
            <span class="text-center">購買清單</span>
        </div>
    <div class="pane-body"  v-for="item in order.items">
<table class="table table-striped " >

            <tr>
            <th>購買日期</th>
            <th>商品名稱</th>
           
            </tr>
            
            <tr>
                <td>{{item.created_at}} </td>
                <td>{{item.product.name}} </td>
               
            </tr>
            

            
            <tr>
              
                <td>
                    {{item.item_total_qty}} 
                    </td>
                <td>${{item.item_total_price}} </td>
                <td>
                    <router-link :to="{name:'userstore',params:{'user_account':item.product.user.account}}">{{item.product.user.account}} </router-link>
                    <button class="btn btn-danger" @click="chat_select(item.seller_id)">聊聊</button>

                 </td>
            </tr>
            
          