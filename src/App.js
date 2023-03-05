import React, { useState } from 'react';
import Carts from './components/Carts';
import Navbar from './components/Navbar';
import ProductsContainer from './components/ProductsContainer';
function App() {
  const [productsContainer, setProductsContainer] = useState(true)
  console.log(productsContainer);
  
  return (
    <div>
      <Navbar setProductsContainer={setProductsContainer} productsContainer={productsContainer} />
      {productsContainer ? <ProductsContainer /> : <Carts />}

    </div>
  );
}

export default App;
