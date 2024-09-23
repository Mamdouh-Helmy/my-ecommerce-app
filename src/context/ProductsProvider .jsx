import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart( [...cart, product]);
    }
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error:', error));
    
    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories, cart, addToCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
