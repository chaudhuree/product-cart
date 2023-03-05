import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  deleteCart,
  incrementCart
} from "../redux/carts/actions";
import { decrementProduct, incrementProduct } from "../redux/products/actions";
const Cart = ({cart}) => {
  const products = useSelector((state) => state.product);
  

  const filteredProduct = products.filter((product) => product.id === cart.id);
  const dispatch = useDispatch();
  const increaseItem = () => {
    dispatch(incrementCart(cart.id));
    dispatch(decrementProduct(cart.id));
  };
  const decreaseItem = () => {

    dispatch(decrementCart(cart.id));
    dispatch(incrementProduct({ id: cart.id, item: 1 }));
  };
  const deleteCartItem = () => {
    dispatch(incrementProduct({ id: cart.id, item: cart.item }));
    dispatch(deleteCart(cart.id));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={cart.imageUrl} alt="product" />

        <div className="space-y-2">
          <h4 className="lws-cartName">{cart.productName}</h4>
          <p className="lws-cartCategory">{cart.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{cart.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={increaseItem}
            disabled={filteredProduct[0].quantity === 0 ? true : false}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cart.item}</span>
          <button
            className="lws-decrementQuantity"
            onClick={decreaseItem}
            disabled={cart.item === 0 ? true : false}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        <p className="text-lg font-bold">
          BDT&nbsp;
          <span className="lws-calculatedPrice">{cart.item * cart.price}</span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={deleteCartItem}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
