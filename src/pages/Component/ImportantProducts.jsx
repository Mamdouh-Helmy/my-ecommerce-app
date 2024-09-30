import { ProductsContext } from "../../context/ProductsProvider";
import { useContext } from "react";
import ProductPopup from "./ProductPopup";
export default function ImportantProducts() {
  const {
    categoriesTops,
    categoriesWomensBags,
    categoriesTablets,
    categoriesMobileAccessories,
    setSelectedProduct,
    selectedProduct,
  } = useContext(ProductsContext);

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="importantProducts">
      <div className="container">
        <div className="content">
          <div className="box">
            <h3>FLASH SALE TODAY</h3>
            <ul>
              {categoriesTops?.products?.length > 0
                ? categoriesTops.products.slice(0, 3).map((product, index) => {
                    return (
                      <li key={index} onClick={() => openPopup(product)}>
                        <div className="text">
                          <h4>{product.title}</h4>
                          <span>${product.price}</span>
                        </div>
                        <div className="images">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                      </li>
                    );
                  })
                : "Loading..."}
            </ul>
          </div>
          <div className="box">
            <h3>BEST SELLERS</h3>
            <ul>
              {categoriesWomensBags?.products?.length > 0
                ? categoriesWomensBags.products.slice(0, 3).map((product, index) => {
                    return (
                      <li key={index} onClick={() => openPopup(product)}>
                        <div className="text">
                          <h4>{product.title}</h4>
                          <span>${product.price}</span>
                        </div>
                        <div className="images">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                      </li>
                    );
                  })
                : "Loading..."}
            </ul>
          </div>
          <div className="box">
            <h3>TOP RATED</h3>
            <ul>
              {categoriesTablets?.products?.length > 0
                ? categoriesTablets.products.slice(0,3).map((product, index) => {
                    return (
                      <li key={index} onClick={() => openPopup(product)}>
                        <div className="text">
                          <h4>{product.title}</h4>
                          <span>${product.price}</span>
                        </div>
                        <div className="images">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                      </li>
                    );
                  })
                : "Loading..."}
            </ul>
          </div>
          <div className="box">
            <h3>NEW ARRIVAL</h3>
            <ul>
              {categoriesMobileAccessories?.products?.length > 0
                ? categoriesMobileAccessories.products.slice(10 , 13).map((product, index) => {
                    return (
                      <li key={index} onClick={() => openPopup(product)}>
                        <div className="text">
                          <h4>{product.title}</h4>
                          <span>${product.price}</span>
                        </div>
                        <div className="images">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                      </li>
                    );
                  })
                : "Loading..."}
            </ul>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={closePopup} />
      )}
    </div>
  );
}
