import { useEffect, useState } from "react";

const DropdownCategoryProdect = ({ category }) => {
  const [data, setData] = useState([]);
  const dataUrl = category?.url;
  useEffect(() => {
    if (dataUrl) {
      fetch(dataUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data.products || []);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [dataUrl]);

  return (
    <div className="dropdown-category-prodect">
      <ul>
        {data.length > 0
          ? data.map((product, index) => (
              <li key={index}>
                <div className="box">
                  <div className="text">
                    <span>{product.title}</span>
                    <span>${product.price}</span>
                  </div>
                  <div className="image">
                  {product.images && product.images.length > 0 ? (
                      <img src={product.images[0]} alt={product.title} />
                    ) : (
                      <div>loading...</div>
                    )}
                  </div>
                </div>
              </li>
            ))
          : "loading..."}
      </ul>
    </div>
  );
};

export default DropdownCategoryProdect;
