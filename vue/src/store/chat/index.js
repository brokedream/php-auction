import Vue from 'vue'
const types={
    getChatlist:'get_chat_list',
    setUnread:'setUnread'
    state:{
        chat_data:{
            chat_user:[]
        chat_message:[]
    mutations:{
        [types.getChatlist](state,data){
            state.chat_data=data
            
                Object.assign(state.chat_data, data)
                 
            let index=state.chat_data.indexOf(user)
            //  state.chat_data[index].unread_id=0
        'unread_id',
        {value:0})
        }
    },
    actions:{
        getChatlist({commit}){
    })
        },
        }
    },
    getters:{
        getChatlist(state){
        }
    }
}
export default chat