import { ADD_PRODUCT, DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./actionType"

const addProduct = (product)=>{
    return {
        type:ADD_PRODUCT,
        payload: product
    }

}
const decrementProduct = (id)=>{
    return {
        type: DECREMENT_PRODUCT,
        payload: id
    }
}
const incrementProduct = (idAndQuantity)=>{
    return {
        type: INCREMENT_PRODUCT,
        payload: idAndQuantity
    }
}
export { addProduct, incrementProduct, decrementProduct }

