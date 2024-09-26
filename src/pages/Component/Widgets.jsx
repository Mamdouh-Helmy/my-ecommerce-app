import { ProductsContext } from "../../context/ProductsProvider ";
import { useContext, useEffect, useRef, useState } from "react";
import { ArrowRight } from "../../utils/icons.util";
import { Link } from "react-router-dom";

export default function Widgets() {
  const { products, categoriesLaptop } = useContext(ProductsContext);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // useEffect(() => {
  //   if (categoriesLaptop && categoriesLaptop.products) {
  //     console.log(categoriesLaptop.products[0]);
  //   }
  // }, [categoriesLaptop]);

  const handleClickDot = (index) => {
    setCount(index);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="widgets">
      <div className="container">
        <div className="box">
          <div className="contet">
            <div className="text">
              <span>THE BEST PLACE TO PLAY</span>
              <h2>
                {categoriesLaptop &&
                categoriesLaptop.products &&
                categoriesLaptop.products.length > 0
                  ? categoriesLaptop.products[count].title
                  : "Loading..."}
              </h2>
              <p>
                {categoriesLaptop &&
                categoriesLaptop.products &&
                categoriesLaptop.products.length > 0
                  ? categoriesLaptop.products[count].description
                  : "Loading..."}
              </p>
              <Link to="/prodets">
                <button className="btn">
                  Shop Now
                  <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="image">
              {categoriesLaptop &&
              categoriesLaptop.products &&
              categoriesLaptop.products.length > 0 ? (
                <img
                  src={categoriesLaptop.products[count].thumbnail}
                  alt="Product"
                />
              ) : (
                "Loading..."
              )}
            </div>
          </div>
          <div className="dot">
            {[...Array(3)].map((_, index) => (
              <span key={index} className={`${index == count ? "active" : ""}`} onClick={() => handleClickDot(index)}></span>
            ))}
          </div>
        </div>
        <div className="box">
          <div className="conteant">
            <div className="text">
              <p>
                {categoriesLaptop &&
                categoriesLaptop.products &&
                categoriesLaptop.products.length > 0
                  ? categoriesLaptop.products[3].title
                  : "Loading..."}
              </p>
              <h5>
                {categoriesLaptop &&
                categoriesLaptop.products &&
                categoriesLaptop.products.length > 0
                  ? categoriesLaptop.products[3].description
                  : "Loading..."}
              </h5>
              <Link to="/prodets">
                <button className="btn">
                  Shop Now
                  <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="images">
              {categoriesLaptop &&
              categoriesLaptop.products &&
              categoriesLaptop.products.length > 0 ? (
                <img
                  src={categoriesLaptop.products[3].thumbnail}
                  alt="Product"
                />
              ) : (
                "Loading..."
              )}
            </div>
          </div>
          <div className="conteant">
            <div className="images">
              {categoriesLaptop &&
              categoriesLaptop.products &&
              categoriesLaptop.products.length > 0 ? (
                <img
                  src={categoriesLaptop.products[4].thumbnail}
                  alt="Product"
                />
              ) : (
                "Loading..."
              )}
            </div>
            <div className="text">
              <h2>
                {categoriesLaptop &&
                categoriesLaptop.products &&
                categoriesLaptop.products.length > 0
                  ? categoriesLaptop.products[4].title
                  : "Loading..."}
              </h2>
              <p>
                {categoriesLaptop &&
                categoriesLaptop.products &&
                categoriesLaptop.products.length > 0
                  ? categoriesLaptop.products[3].price
                  : "Loading..."}
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
