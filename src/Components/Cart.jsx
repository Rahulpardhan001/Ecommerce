import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItemToCart, incrementItemToCart, removeItemToCart } from '../Redux/actions/cartAction';

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + Number(item.quantity) * Number(item.price);
  }, 0);

  return (
    <div className="section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Your Cart</h2>

        {cartItems && cartItems.length > 0 ? (
          <>
            {/* Cart Items Table */}
            <table className="table table-bordered table-hover">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((curElem) => (
                  <tr key={curElem.id}>
                    <td>{curElem.title}</td>
                    <td>
                      <img
                        src={curElem.image}
                        alt={curElem.title}
                        style={{ width: '50px', height: '50px' }}
                      />
                    </td>
                    <td>${curElem.price}</td>
                    <td className="text-center">
                      <span onClick={() => dispatch(decrementItemToCart(curElem))}>
                        <i className="fa-solid fa-minus mark"></i>
                      </span>
                      <span className="p-2">{curElem.quantity}</span>
                      <span onClick={() => dispatch(incrementItemToCart(curElem))}>
                        <i className="fa-solid fa-plus mark"></i>
                      </span>
                    </td>
                    <td>${curElem.quantity * curElem.price}</td>
                    <td className="d-flex justify-content-center align-items-center">
                      <span
                        className="text-danger text-center"
                        onClick={() => dispatch(removeItemToCart(curElem.id))}
                      >
                        <i className="fa-solid fa-xmark bg-light"></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Price Table */}
            <table className="table table-bordered mt-4">
              <tbody>
                <tr>
                  <th className="text-right font-weight-bold">Total Price:</th>
                  <td className="text-center">${totalPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <div className="text-center">
            <p className="fs-1 text-danger">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
