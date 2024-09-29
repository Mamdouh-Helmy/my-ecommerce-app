import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import { ArrowRight } from "../../utils/icons.util";
import { Link } from "react-router-dom";

export default function BannerHome() {
  const { categoriesTablets } = useContext(ProductsContext);
  const hasProducts =
    categoriesTablets &&
    categoriesTablets.products &&
    categoriesTablets.products.length > 0;

  return (
    <div className="banner-home">
      <div className="container">
        <div className="box">
          <div className="text">
            <span>
              SAVE UP TO $
              {hasProducts ? categoriesTablets.products[0].price : "Loading..."}
            </span>
            <h3>
              {hasProducts ? categoriesTablets.products[0].title : "Loading..."}
            </h3>
            <p>
              {hasProducts
                ? categoriesTablets.products[0].description
                : "Loading..."}
            </p>
            <Link to="/prodets">
              <button className="btn">
                SHOP NOW <ArrowRight />
              </button>
            </Link>
          </div>
          <div className="images">
            {hasProducts ? (
              <img
                src={categoriesTablets.products[0].thumbnail}
                alt="Product"
              />
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
