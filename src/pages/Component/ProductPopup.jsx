import StarRating from "./StarRating";
import { ShoppingCart } from "../../utils/icons.util";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsProvider";

const ProductPopup = ({ product, onClose }) => {
  const { cart, addToCart } = useContext(ProductsContext);
  const [indexImages , setIndexImages] = useState(0)

  const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);

  const handleAddToCart = () => {
    if (!isProductInCart) {
      addToCart(product);
    }
  };
  
  const handelIndexImages = (index) => {
    setIndexImages(index)
  }
  return (
    <div className="pop">
      <div className="box-pop">
        <button onClick={onClose}>x</button>
        <div className="content">
          <div className="box">
            <div className="images">
              <div className="imge">
                <img src={product.images[indexImages]} alt={product.title} />
              </div>
              <div className="all-images">
                {product.images &&
                  product.images.map((image, index) => (
                    <div key={index} onClick={() => handelIndexImages(index)}>
                        <img src={image} alt={product.title} className={`${index == indexImages ? "box-images active" : "box-images"}`}/>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="rating-star">
              <StarRating rating={product.rating} />
              <div className="rating">{product.rating} Star Rating</div>
            </div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="dateiles-prodects-pop">
              <div className="text">
                <div className="fact">
                  <span>Sku: </span> {product.sku}
                </div>
                <div className="fact">
                  <span>Brand: </span>
                  {product.brand || "No specific brand"}
                </div>
              </div>
              <div className="text">
                <div
                  className="fact"
                  style={{
                    color: `${
                      product.availabilityStatus == "In Stock"
                        ? "#2db224"
                        : "#ee5858"
                    }`,
                  }}
                >
                  <span>Availability: </span> {product.availabilityStatus}
                </div>
                <div className="fact">
                  <span>Category :</span> {product.category}
                </div>
              </div>
            </div>
            <span className="price">${product.price}</span>
            <button
              className="add-cart"
              onClick={handleAddToCart}
              disabled={isProductInCart}
              style={{
                cursor: `${isProductInCart ? "no-drop" : "pointer"}`,
                pointerEvents: `${isProductInCart ? "none" : "all"}`,
                opacity: `${isProductInCart ? "0.5" : "1"}`,
              }}
            >
              {isProductInCart ? "Not add to cart" : "Add to cart"}
              <ShoppingCart size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
