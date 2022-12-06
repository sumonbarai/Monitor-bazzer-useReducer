import React, { useContext } from "react";
import { MyContext } from "../App";
import OrderItem from "../components/shoppingCard/OrderItem";
import PriceCalculation from "../components/shoppingCard/PriceCalculation";

const ShoppingCard = () => {
  const { store, dispatch } = useContext(MyContext);
  const TotalQuantity = store?.card?.reduce(
    (total, current) => total + current.quantity,
    0
  );
  //   how much order items  render
  let orderItems = "";
  if (store.card.length < 1) {
    orderItems = <p className="text-center text-xl">No Order items found</p>;
  } else if (store.card.length >= 1) {
    orderItems = store.card.map((item) => (
      <OrderItem key={item._id} product={item} />
    ));
  }

  return (
    <div className="container mx-auto min-h-[88.1vh]">
      <div className="section-heading py-5 uppercase">
        <h2 className="text-center text-3xl">Shopping Card</h2>
        <h3 className="text-center text-2xl">
          Total Order Item ({TotalQuantity})
        </h3>
      </div>

      <div className="sm:flex gap-5">
        <div className="left-side shadow-md w-full sm:w-3/5 lg:w-4/5 h-[25rem] overflow-auto custom-scrollbar">
          {orderItems}
        </div>
        <div className="right-side shadow-md w-full sm:w-2/5 lg:w-1/5 p-8">
          <PriceCalculation />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
