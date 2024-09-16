import { Link } from "react-router-dom";
import Usears from "./Usears";
import {
  Logo,
  Search,
  ShoppingCart,
  Heart,
  User,
} from "../../utils/icons.util";
import { useState } from "react";
export default function Middlenav() {
  const [check, setCheck] = useState(false);
  const handleClick = () => {
    setCheck(!check);
  };
  return (
    <div className="nav">
      <div className="container">
        <Link to="/">
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
          <div className="shoop-cart">
            <ShoppingCart />
          </div>
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
