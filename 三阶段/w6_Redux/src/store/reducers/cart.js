import {LOGIN,LOGOUT,CHANGE_USER_PASSWORD,UPDATE_USER_AVATAR} from '../actions/user'

let shoppingCart  = localStorage.getItem('shoppingCart');
try{
    shoppingCart = JSON.parse(shoppingCart) || {}
}catch(err){
    shoppingCart = {}
}

const initState = {
    cart:shoppingCart
}

const reducer = function(state=initState,action){
    switch(action.type){
        
        case 'CHANGE_QTY':
            const goodslist = state.goodslist.map(item=>{
                if(item._id === action._id){
                    item.qty = action.qty;
                }
            })
            return {
                ...state,
                goodslist
            }

        default:
            return state;
    }
}

export default reducer