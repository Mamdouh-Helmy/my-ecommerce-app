import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categorieProdects, setCategoriesProdects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesLaptop, setCategoriesLaptop] = useState([]);
  const [categoriesMobileAccessories, setCategoriesMobileAccessories] =
    useState([]);
  const [categoriesWatches, setCategoriesWatches] = useState([]);
  const [categoriesTablets, setCategoriesTablets] = useState([]);
  const [categoriesTops, setCategoriesTops] = useState([]);
  const [categoriesWomensBags, setCategoriesWomensBags] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIcons, setHoveredIcons] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [timear, setTimer] = useState(() => {
    const savedTime = localStorage.getItem("timear");
    return savedTime ? JSON.parse(savedTime) : [];
  });

  const addToCart = (product) => {
    if (!Array.isArray(cart)) {
      setCart([product]);
    } else {
      const isProductInCart = cart.find((item) => item.id === product.id);
      if (!isProductInCart) {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
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

    fetch("https://dummyjson.com/products/category/laptops")
      .then((response) => response.json())
      .then((data) => setCategoriesLaptop(data))
      .catch((error) => console.error("Error:", error));

    fetch("https://dummyjson.com/products/category/mobile-accessories")
      .then((response) => response.json())
      .then((data) => setCategoriesMobileAccessories(data))
      .catch((error) => console.error("Error:", error));

    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((response) => response.json())
      .then((data) => setCategoriesWatches(data))
      .catch((error) => console.error("Error:", error));

    fetch("https://dummyjson.com/products/category/tablets")
      .then((response) => response.json())
      .then((data) => setCategoriesTablets(data))
      .catch((error) => console.error("Error:", error));

    fetch("https://dummyjson.com/products/category/tops")
      .then((response) => response.json())
      .then((data) => setCategoriesTops(data))
      .catch((error) => console.error("Error:", error));

    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((response) => response.json())
      .then((data) => setCategoriesWomensBags(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCart([]);
      }
    } else {
      setCart([]);
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

  useEffect(() => {
    localStorage.setItem("timear", JSON.stringify(timear));
  }, [timear]);

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
        categoriesLaptop,
        setTimer,
        timear,
        setCategoriesMobileAccessories,
        categoriesMobileAccessories,
        categoriesWatches,
        categoriesTablets,
        categoriesTops,
        categoriesWomensBags,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
