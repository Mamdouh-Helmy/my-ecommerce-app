import { Clion, ArrowRight, Gogle, Appl } from "../../utils/icons.util";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <div className="clion">
            <div className="icon">
              <Clion />
            </div>
            <div className="info">
              <span>Customer Supports:</span>
              <span>(629) 555-0129</span>
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              <span>info@kinbo.com</span>
            </div>
          </div>
          <div className="links">
            <h4>Top Category</h4>
            <ul>
              <li>Computer & Laptop</li>
              <li>SmartPhone</li>
              <li>Headphone</li>
              <li>Accessories</li>
              <li>Camera & Photo</li>
              <li>TV & Homes</li>
              <li className="all">
                Browse All Product <ArrowRight color="#EBC80C" size="15" />
              </li>
            </ul>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <ul>
              <li>Shop Product</li>
              <li>Shoping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="links acountes">
            <h4>Download APp</h4>
            <ul>
              <li>
                <div className="icon">
                  <Gogle />
                </div>
                <div className="text">
                  <span>Get it now</span>
                  <span>Google Play</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <Appl />
                </div>
                <div className="text">
                  <span>Get it now</span>
                  <span>App Store</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="links popular">
            <h4>Popular Tag</h4>
            <ul>
              <li>Game</li>
              <li>iPhone</li>
              <li>TV</li>
              <li>Macbook</li>
              <li>SSD</li>
              <li>Power Bank </li>
              <li>Smart TV</li>
              <li>Speaker</li>
              <li>Tablet</li>
              <li>Microwave</li>
              <li>Samsung</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </div>
  );
}
