import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const Carts = () => {
  const carts = useSelector((state) => state.cart);
  const totalPrice = carts.reduce(
    (total, cart) => (total += cart.item * cart.price),
    0
  );

  return (
    <div>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>

          <div className="cartListContainer">
            <div className="space-y-6">
              <hr />
              <br />
              {carts.length === 0 ? (
                <i className="mb-8 text-xl font-bold">No Shopping Cart</i>
              ) : (
                carts.map((cart) => <Cart cart={cart} key={cart.id}/>)
              )}
            </div>

            <div>
              <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                  Bill Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>
                      BDT <span className="lws-subtotal">{totalPrice}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>
                      BDT <span className="lws-discount">0</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>
                      BDT <span className="vat">0</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">
                      BDT <span className="lws-total">{totalPrice}</span>
                    </p>
                  </div>
                  <button className="placeOrderbtn">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carts;
