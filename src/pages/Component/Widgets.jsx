import { ProductsContext } from "../../context/ProductsProvider";
import { useContext, useEffect, useState } from "react";
import { ArrowRight } from "../../utils/icons.util";
import { Link } from "react-router-dom";

export default function Widgets() {
  const { categoriesLaptop } = useContext(ProductsContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClickDot = (index) => {
    setCount(index);
  };

  return (
    <div className="widgets-box">
      <div className="container">
        <div className="content-box">
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
                <span
                  key={index}
                  className={`${index === count ? "popl active" : "popl"}`}
                  onClick={() => handleClickDot(index)}
                ></span>
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
    </div>
  );
}
