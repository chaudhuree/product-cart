import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, incrementCart } from "../redux/carts/actions";
import { decrementProduct } from "../redux/products/actions";
import ProductForm from "./ProductForm";
const ProductsContainer = () => {
  const products = useSelector((state) => state.product);
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCartHandler = (product) => {

    const id = product.id;
    console.log(id);
    const ExistingCart = carts.filter((cart) => cart.id === id);

    console.log(ExistingCart);
    if (ExistingCart.length > 0) {
      dispatch(incrementCart(id));
      dispatch(decrementProduct(id));
    } else {
      dispatch(
        addCart(product)
      );
      dispatch(decrementProduct(id));
    }
  };
  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {products.length === 0 ? (
            <h1 className="formTitle">No product Available</h1>
          ) : (
            products.map((product) => (
              <div className="lws-productCard" key={product.id}>
                <img
                  className="lws-productImage"
                  src={product.imageUrl}
                  alt="product"
                />
                <div className="p-4 space-y-2">
                  <h4 className="lws-productName">{product.productName}</h4>
                  <p className="lws-productCategory">{product.category}</p>
                  <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                      BDT <span className="lws-price">{product.price}</span>
                    </p>
                    <p className="productQuantity">
                      QTY{" "}
                      <span className="lws-quantity">{product.quantity}</span>
                    </p>
                  </div>
                  <button
                    className="lws-btnAddToCart"
                    disabled={product.quantity === 0 ? true : false}
                    onClick={() => addCartHandler(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <ProductForm />
      </div>
    </main>
  );
};

export default ProductsContainer;
