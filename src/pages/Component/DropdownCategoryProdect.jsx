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
        {data.map((product , index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownCategoryProdect;
