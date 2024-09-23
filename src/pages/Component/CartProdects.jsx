import { useState } from "react";

export default function CartProdects({ cart }) {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (index, value) => {
    setQuantities({
      ...quantities,
      [index]: Math.max(1, (quantities[index] || 1) + value),
    });
  };
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
                      <td>
                        $
                      {quantities[index] > 0
                          ? (item.price * (quantities[index] || 0)).toFixed(2)
                          : item.price.toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No items in the cart</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
