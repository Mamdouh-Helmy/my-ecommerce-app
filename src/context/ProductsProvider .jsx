import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categorieProdects, setCategoriesProdects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIcons, setHoveredIcons] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (!isProductInCart) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error:", error));

    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const DataUrl = categorieProdects?.url;
  useEffect(() => {
    if (DataUrl) {
      fetch(DataUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setCategoriesData(data.products || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
          setLoading(false);
        });
    } else {
      setCategoriesData(products);
      setLoading(false);
    }
  }, [DataUrl, products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        cart,
        addToCart,
        setCart,
        setCategoriesProdects,
        categorieProdects,
        setCategoriesData,
        categoriesData,
        loading,
        error,
        hoveredIcons,
        setHoveredIcons,
        selectedProduct,
        setSelectedProduct,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
