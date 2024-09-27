import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProdectsByCategory from "./ProdectsByCategory";

export default function Productlist() {
  const { categories , setCategoriesProdects , setSelectedCategory , selectedCategory} = useContext(ProductsContext);

  const handleSelectCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(category); 
      setCategoriesProdects(category)
    }
  };

  const handleSelectAll = () => {
    setSelectedCategory(null); 
  };

  return (
    <div className="Product-list">
      <div className="container">
        <div className="list-box">
          <div className="category">Category</div>
          <ul>
            <li
              onClick={handleSelectAll}
              className={selectedCategory === null ? "active" : ""}
            >
              <div>
                <input
                  type="radio"
                  name="category"
                  id="category-all"
                  checked={selectedCategory === null}
                  onChange={handleSelectAll}
                />
              </div>
              <div className="text">All</div>
            </li>

            {categories && categories.length > 0 ? (
              categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectCategory(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
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
          <ProdectsByCategory/>
        </div>
      </div>
    </div>
  );
}
