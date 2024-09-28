import { Link } from "react-router-dom";
import { ArrowRight, Eye, ShoppingCart, Heart } from "../../utils/icons.util";
import CountdownTimer from "./CountdownTimer";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import StarRating from "./StarRating";
import ProductPopup from "./ProductPopup";

export default function TodayBestDeals() {
  const {
    categoriesMobileAccessories,
    cart,
    addToCart,
    loading,
    error,
    setHoveredIcons,
    hoveredIcons,
    selectedProduct,
    setSelectedProduct,
  } = useContext(ProductsContext);

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
    <>
      <div className="today-best-deals">
        <div className="container">
          <div className="content">
            <div className="text">
              Best Deals
              <div className="timear">
                Deals ends in
                <CountdownTimer />
              </div>
            </div>
            <Link to="/prodets">
              <div className="all-prodects">
                Browse All Products <ArrowRight color="#2DA5F3" size="18" />
              </div>
            </Link>
          </div>

          <div className="product">
            <div className="box-products">
              {categoriesMobileAccessories?.products?.length > 0 ? (
                categoriesMobileAccessories.products
                  .slice(0, 1)
                  .map((product, index) => {
                    const isProductInCart = cart.some(
                      (cartItem) => cartItem.id === product.id
                    );
                    return (
                      <div key={index}>
                        <div className="images">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>

                        <div className="star">
                          <StarRating rating={product.rating} />
                          <span className="star-stoke">({product.stock})</span>
                        </div>

                        <div className="text">
                          <h4>{product.title}</h4>
                          <span>${product.price}</span>
                          <p>{product.description}</p>
                        </div>

                        <div className="buttons">
                          <button>
                            <Heart color="#191C1F" />
                          </button>
                          <button
                            className="btn"
                            onClick={() => addToCart(product)}
                            style={{
                              cursor: `${
                                isProductInCart ? "no-drop" : "pointer"
                              }`,
                              pointerEvents: `${
                                isProductInCart ? "none" : "all"
                              }`,
                              opacity: `${isProductInCart ? "0.5" : "1"}`,
                            }}
                            disabled={isProductInCart}
                          >
                            <ShoppingCart /> Add to cart
                          </button>
                          <button onClick={() => openPopup(product)}>
                            <Eye />
                          </button>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div>No products available</div>
              )}
            </div>

            <div className="box-all-products">
              <div className="prodects-boxs">
                {categoriesMobileAccessories?.products?.length > 0 ? (
                  categoriesMobileAccessories.products
                    .slice(1, 9)
                    .map((product, index) => {
                      const isProductInCart = cart.some(
                        (cartItem) => cartItem.id === product.id
                      );

                      return (
                        <div key={index} className="box">
                          <div className="images">
                            <img src={product.thumbnail} alt={product.title} />
                          </div>
                          <div className="count">
                            <StarRating rating={product.rating} />
                            <span className="count-prodect">
                              ({product.stock})
                            </span>
                          </div>
                          <div className="text">
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                          </div>
                          <div className="button">
                            <button
                              onMouseEnter={() =>
                                handleMouseEnter("heart-" + index)
                              }
                              onMouseLeave={() =>
                                handleMouseLeave("heart-" + index)
                              }
                            >
                              <Heart
                                className="icon"
                                color={
                                  hoveredIcons["heart-" + index]
                                    ? "#FFFFFF"
                                    : "#191C1F"
                                }
                                size="20"
                              />
                            </button>
                            <button
                              onMouseEnter={() =>
                                handleMouseEnter("cart-" + index)
                              }
                              onMouseLeave={() =>
                                handleMouseLeave("cart-" + index)
                              }
                              onClick={() => addToCart(product)}
                              style={{
                                cursor: `${
                                  isProductInCart ? "no-drop" : "pointer"
                                }`,
                                pointerEvents: `${
                                  isProductInCart ? "none" : "all"
                                }`,
                                opacity: `${isProductInCart ? "0.5" : "1"}`,
                              }}
                              disabled={isProductInCart}
                            >
                              <ShoppingCart
                                color={
                                  hoveredIcons["cart-" + index]
                                    ? "#FFFFFF"
                                    : "#191C1F"
                                }
                                size="20"
                              />
                            </button>
                            <button
                              onMouseEnter={() =>
                                handleMouseEnter("eye-" + index)
                              }
                              onMouseLeave={() =>
                                handleMouseLeave("eye-" + index)
                              }
                              onClick={() => openPopup(product)}
                            >
                              <div className="deatiles-prodects">
                                <Eye
                                  size="20"
                                  color={
                                    hoveredIcons["eye-" + index]
                                      ? "#FFFFFF"
                                      : "#191C1F"
                                  }
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div>No products available</div>
                )}
              </div>
            </div>
          </div>
          {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={closePopup} />
      )}
        </div>
        
      </div>
      
    </>
  );
}
