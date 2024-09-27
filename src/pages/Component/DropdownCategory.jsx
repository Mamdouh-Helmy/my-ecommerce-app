import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsProvider";
import DropdownCategoryProdect from "./DropdownCategoryProdect";
import { useState, useContext } from "react";

export default function DropdownCategory() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { products, categories } = useContext(ProductsContext);

  if (!products.length || !categories.length) {
    return <div>Loading...</div>;
  }

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div
        className="dropdown-category"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#5F6C72",
          padding: "10px 30px 10px 10px",
          position: "absolute",
          zIndex: "100",
          borderColor: "#E4E7E9",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "3px",
        }}
      >
        <ul>
          <Link to="/prodets" style={{ color: "#5F6C72"}}>
            <li>All</li>
          </Link>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedIndex !== null && selectedIndex < categories.length && (
        <DropdownCategoryProdect category={categories[selectedIndex]} />
      )}
    </>
  );
}
