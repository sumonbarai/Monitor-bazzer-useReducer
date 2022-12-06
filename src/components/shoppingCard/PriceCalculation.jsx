import React, { useContext } from "react";
import { MyContext } from "../../App";

const PriceCalculation = () => {
  const { store, dispatch } = useContext(MyContext);
  const TotalQuantity = store?.card?.reduce(
    (total, current) => total + current.quantity,
    0
  );
  const productPrice = store?.card?.reduce(
    (total, current) => total + current.quantity * current.price,
    0
  );
  const totalDelivery = store?.card?.reduce(
    (total, current) => total + current.quantity * 10,
    0
  );
  const TotalVat = Math.round(productPrice * 0.01);
  const totalPrice = TotalQuantity + productPrice + totalDelivery + TotalVat;
  return (
    <>
      <div className="calculation">
        <h3 className="text-2xl pb-2">Price calculation:</h3>
        <div className="flex justify-between">
          <p>order item :</p>
          <span> {TotalQuantity}</span>
        </div>
        <div className="flex justify-between">
          <p>price :</p>
          <span>TK {productPrice}</span>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge :</p>
          <span>TK {totalDelivery}</span>
        </div>
        <div className="flex justify-between">
          <p>Vat :</p>
          <span>TK {TotalVat}</span>
        </div>
        <div className="flex justify-between">
          <p>Total Price :</p>
          <span>TK {totalPrice}</span>
        </div>
      </div>
      <button className="btn btn-sm mt-6">Order place</button>
    </>
  );
};

export default PriceCalculation;
