import { ADD_PRODUCT, DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./actionType";
import initialState from "./initialState";

const reducer =  (state = initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return [
                ...state, action.payload
            ]
        case INCREMENT_PRODUCT:
            const newProductsAfterIncrement = state.map((product)=>{
                if(product.id===action.payload.id){
                    product.quantity += action.payload.item;
                    return product;
                }else{
                    return product;
                }
            })
            return newProductsAfterIncrement
            case DECREMENT_PRODUCT:
                const newProductsAfterDecrement = state.map((product)=>{
                    if(product.id===action.payload){
                        if(product.quantity>0){
                            product.quantity -= 1
                        }
                        return product;
                    }else{
                        return product;
                    }
                })
                return newProductsAfterDecrement
        default:
            return [
                ...state
            ]
    }
}
export default reducer