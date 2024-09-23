import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsProvider ";
import Usears from "./Usears";
import {
  Logo,
  Search,
  ShoppingCart,
  Heart,
  User,
} from "../../utils/icons.util";
import { useContext, useState } from "react";
export default function Middlenav() {
  const { cart } = useContext(ProductsContext);
  const [check, setCheck] = useState(false);
  const handleClick = () => {
    setCheck(!check);
  };
  // console.log(cart.length)
  return (
    <div className="nav">
      <div className="container">
        <Link to="/" style={{textDecoration: "none" , border: "none"}}>
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <div className="input">
          <input type="text" placeholder="Search for anything..." />
          <div className="search">
            <Search />
          </div>
        </div>
        <div className="icons">
          <Link to="/cart" style={{textDecoration: "none" , display: "block"}}>
            <div className="shoop-cart">
              <span className="count-prodects">{cart.length}</span>
              <ShoppingCart />
            </div>
          </Link>
          <Heart />
          <div className="user" onClick={handleClick}>
            <User />
          </div>

          {check && (
            <div className="dropdown-usear">
              <Usears />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
