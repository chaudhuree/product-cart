import { combineReducers } from 'redux';
import cartReducer from './carts/reducer';
import productReducer from './products/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    product : productReducer,
   
})
export default rootReducer;