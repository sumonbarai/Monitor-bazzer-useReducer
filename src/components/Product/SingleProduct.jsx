import React, { useContext } from "react";
import { MyContext } from "../../App";
import { addToCardAction } from "../../app/store";

const SingleProduct = ({ product }) => {
  const { image, display, features, ports, price, resolution, name } = product;
  const { store, dispatch } = useContext(MyContext);
  // dispatch addtocard action
  const handleAddToCard = () => {
    dispatch(addToCardAction(product));
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="monitor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <ul className="list-disc p-4 text-base">
          <li>Resolution: {resolution}</li>
          <li>Display: {display}</li>
          <li>Ports: {ports}</li>
          <li>Features: {features}</li>
        </ul>
        <h3 className="text-xl text-[#ef4a23] text-center">TK {price}</h3>
        <div className="card-actions justify-between">
          <button className="btn btn-sm btn-[#081621] hover:bg-[#ef4a23]">
            Add TO Watch List
          </button>
          <button
            onClick={handleAddToCard}
            className="btn btn-sm btn-[#081621] hover:bg-[#ef4a23]"
          >
            Add TO Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
