import { ProductsContext } from "../../context/ProductsProvider ";
import { useContext } from "react";
import { ArrowRight } from "../../utils/icons.util";
import { Link } from "react-router-dom";
export default function Widgets() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="widgets">
      <div className="container">
        <div className="box">
          <div className="contet">
            <div className="text">
              <span>THE BEST PLACE TO PLAY</span>
              <h2>{products.length > 0 ? products[0].title : "Loading..."}</h2>
              <p>
                {products.length > 0 ? products[0].description : "Loading..."}
              </p>
              <Link to="/prodets">
                <button className="btn">
                  Shop Now
                  <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="image">
              {products.length > 0 ? (
                <img src={products[0].images} alt="Product" />
              ) : (
                "Loading..."
              )}
            </div>
          </div>
          <div className="dot">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="box">
          <div className="conteant">
            <div className="text">
              <p>{products.length > 1 ? products[21].title : "Loading..."}</p>
              <h5>
                {products.length > 1 ? products[21].description : "Loading..."}
              </h5>
              <Link to="/prodets">
                <button className="btn">
                  Shop Now
                  <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="images">
              {products.length > 1 ? (
                <img src={products[21].images} alt="Product" />
              ) : (
                "Loading..."
              )}
            </div>
          </div>
          <div className="conteant">
            <div className="images">
              {products.length > 1 ? (
                <img src={products[2].images} alt="Product" />
              ) : (
                "Loading..."
              )}
            </div>
            <div className="text">
              <h2>{products.length > 1 ? products[2].title : "Loading..."}</h2>
              <p>
                {products.length > 1 ? `$${products[2].price}` : "Loading..."}
              </p>
              <Link to="/prodets">
                <button className="btn">
                  Shop Now
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
