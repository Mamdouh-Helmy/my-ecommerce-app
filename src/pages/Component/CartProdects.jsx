import { useState, useEffect } from "react";
import { ArrowRight } from "../../utils/icons.util";

export default function CartProdects({ cart }) {
  const [quantities, setQuantities] = useState({});
  const [subTotals, setSubTotals] = useState({});

  const updateQuantity = (index, value) => {
    const newQuantity = Math.max(1, (quantities[index] || 1) + value);

    setQuantities({
      ...quantities,
      [index]: newQuantity,
    });
  };

  useEffect(() => {
    const newSubTotals = {};

    cart.map((item, index) => {
      const quantity = quantities[index] || 1;
      newSubTotals[index] = parseInt((item.price * quantity).toFixed(2));
    });
    setSubTotals(newSubTotals);
  }, [quantities, cart]);

  const total = Object.values(subTotals)
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2);
  return (
    <div className="cart">
      <div className="container">
        <div className="prodects">
          <div className="box">
            <table>
              <caption>Shopping Cart</caption>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                {cart && cart.length > 0 ? (
                  cart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="images">
                          {<img src={item.thumbnail} alt="Prodects" />}
                        </div>
                        {item.title}
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="quantity">
                          <button onClick={() => updateQuantity(index, -1)}>
                            -
                          </button>
                          <input
                            type="text"
                            value={
                              quantities[index] < 10
                                ? `0${quantities[index] || "01"}`
                                : quantities[index] || "01"
                            }
                            readOnly
                          />
                          <button onClick={() => updateQuantity(index, 1)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>${subTotals[index] || item.price.toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            <div>
              {cart.length === 0 && (
                <div className="no-iteams">No items in the cart</div>
              )}
            </div>
          </div>
          <div className="box">
            <div className="title">Card Totals</div>
            <div className="detailes-prodects-price">
              <div className="text">
                <span>Sub-total</span>
                <span>${total}</span>
              </div>
              <div className="text">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="text">
                <span>Discount</span>
                <span>$0</span>
              </div>
              <div className="text">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="text">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <button>
              Proceed to Checkout
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
