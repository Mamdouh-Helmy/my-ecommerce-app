import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import { ArrowRight } from "../../utils/icons.util";
import { Link } from "react-router-dom";
export default function Banner() {
  const { categoriesWatches } = useContext(ProductsContext);

  return (
    <div className="banner">
      <div className="container">
        {categoriesWatches?.products?.length > 0 ? (
          categoriesWatches.products.slice(2, 4).map((product, index) => {
            return (
              <div key={index} className="box">
                <div className="text">
                  <span className={`${index == 1 ? "one" : "two"}`}>
                    {index === 1 ? "INTRODUCING NEW" : "INTRODUCING"}
                  </span>
                  <h3 className={`${index == 1 ? "one" : "two"}`}>
                    {product.title}
                  </h3>
                  <p className={`${index == 1 ? "one" : "two"}`}>
                    {product.description}
                  </p>
                  <Link to="/prodets">
                    <button className="btn">
                      SHOP NOW <ArrowRight />{" "}
                    </button>
                  </Link>
                </div>
                <div className="iamges">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className={`${index == 1 ? "one" : "two"}`}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
}
