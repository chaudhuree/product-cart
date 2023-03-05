import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/products/actions";
const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};
const ProductForm = () => {
  const products = useSelector((state) => state.product);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("https://dummyimage.com/400x400/000/fff&text=di");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const onsubmitHandler = (e) => {
    e.preventDefault();
    const id = nextProductId(products);
    const newProduct = {
      id,
      productName,
      category,
      imageUrl,
      price,
      quantity,
    };
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={(e) => onsubmitHandler(e)}
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              onChange={(e) => setImageUrl(e.target.value)}
              
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
export default ProductForm;
