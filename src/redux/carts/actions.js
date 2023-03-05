import { ADD_CART, DECREMENT_CART, DELETE_CART, INCREMENT_CART } from './actionType';

const addCart = (newCart)=>{
    return {
        type: ADD_CART,
        payload: newCart
    }
}

const deleteCart = (id)=>{
    return {
        type: DELETE_CART,
        payload: id
    }
}

const incrementCart = (id)=>{
    return {
        type: INCREMENT_CART,
        payload: id
    }
}
const decrementCart = (id)=>{
    return {
        type: DECREMENT_CART,
        payload: id
    }
}

export { addCart, deleteCart, incrementCart, decrementCart };

