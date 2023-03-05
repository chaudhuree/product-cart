import { ADD_CART, DECREMENT_CART, DELETE_CART, INCREMENT_CART } from './actionType';
import initialState from './initialState';

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_CART:
            return [
                ...state,{...action.payload,item:1}
            ]
        case DELETE_CART:
            const updatedCarts = state.filter((cart)=> cart.id !== action.payload)
            return [...updatedCarts]
        case INCREMENT_CART:
            const newCartsAfterIncrement = state.map((cart)=>{
                if(cart.id===action.payload){
                    cart.item += 1;
                    return cart;
                }else{
                    return cart;
                }
            })
            return newCartsAfterIncrement
            case DECREMENT_CART:
                const newCartsAfterDecrement = state.map((cart)=>{
                    if(cart.id===action.payload){
                        if(cart.item>0){
                            cart.item -= 1
                        }
                        return cart;
                    }else{
                        return cart;
                    }
                })
                return newCartsAfterDecrement
        default:
            return [...state]
    }
}
export default reducer;
