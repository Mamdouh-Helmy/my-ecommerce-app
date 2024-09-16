import { Link } from "react-router-dom";
import {
  Logo,
  Search,
  ShoppingCart,
  Heart,
  User,
} from "../../utils/icons.util";
export default function Middlenav() {
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
          <User />
        </div>
      </div>
    </div>
  );
}
