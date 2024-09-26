import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsProvider ";
import { ShoppingCart, Eye, Heart } from "../../utils/icons.util";
import StarRating from "./StarRating";
import ProductPopup from "./ProductPopup";

export default function ProdectsByCategory({ category }) {
  const { products, addToCart, cart } = useContext(ProductsContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIcons, setHoveredIcons] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const DataUrl = category?.url;
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
          setData(data.products || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
          setLoading(false);
        });
    } else {
      setData(products);
      setLoading(false);
    }
  }, [DataUrl, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleMouseEnter = (icon) => {
    setHoveredIcons({ ...hoveredIcons, [icon]: true });
  };

  const handleMouseLeave = (icon) => {
    setHoveredIcons({ ...hoveredIcons, [icon]: false });
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="box">
      <div className="prodect-box">
        {data.length > 0 ? (
          data.map((product, index) => {
            const isProductInCart = cart.some(
              (cartItem) => cartItem.id === product.id
            );

            return (
              <div key={index} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <div className="text">
                  <div className="count">
                    <StarRating rating={product.rating} />
                    <span className="count-prodect">({product.stock})</span>
                  </div>

                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <div className="button">
                    <button
                      onMouseEnter={() => handleMouseEnter("heart-" + index)}
                      onMouseLeave={() => handleMouseLeave("heart-" + index)}
                    >
                      <Heart
                        className="icon"
                        color={
                          hoveredIcons["heart-" + index] ? "#FFFFFF" : "#191C1F"
                        }
                        size="20"
                      />
                    </button>
                    <button
                      onMouseEnter={() => handleMouseEnter("cart-" + index)}
                      onMouseLeave={() => handleMouseLeave("cart-" + index)}
                      onClick={() => addToCart(product)}
                      style={{
                        cursor: `${isProductInCart ? "no-drop" : "pointer"}`,
                        pointerEvents: `${isProductInCart ? "none" : "all"}`,
                        opacity: `${isProductInCart ? "0.5" : "1"}`,
                      }}
                      disabled={isProductInCart}
                    >
                      <ShoppingCart
                        color={
                          hoveredIcons["cart-" + index] ? "#FFFFFF" : "#191C1F"
                        }
                        size="20"
                      />
                    </button>
                    <button
                      onMouseEnter={() => handleMouseEnter("eye-" + index)}
                      onMouseLeave={() => handleMouseLeave("eye-" + index)}
                      onClick={() => openPopup(product)}
                    >
                      <div className="deatiles-prodects">
                        <Eye
                          size="20"
                          color={
                            hoveredIcons["eye-" + index] ? "#FFFFFF" : "#191C1F"
                          }
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No products available</div>
        )}
      </div>

      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={closePopup} />
      )}
    </div>
  );
}