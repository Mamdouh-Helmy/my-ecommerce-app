import { useState, useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider ";
import ProdectsByCategory from "./ProdectsByCategory";

export default function Productlist() {
  const { categories } = useContext(ProductsContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(category); 
    }
  };

  return (
    <div className="Product-list">
      <div className="container">
        <div className="list-box">
          <div className="category">Category</div>
          <ul>
            {categories && categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} onClick={() => handleSelectCategory(category)}>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id={`category-${index}`}
                      checked={selectedCategory === category}
                      onChange={() => handleSelectCategory(category)}
                    />
                  </div>
                  <div className="text">{category.name}</div>
                </li>
              ))
            ) : (
              <li>No categories available</li>
            )}
          </ul>
        </div>
        <div className="list-box">
          
          {selectedCategory && (
            <ProdectsByCategory category={selectedCategory} />
          )}
        </div>
      </div>
    </div>
  );
}
