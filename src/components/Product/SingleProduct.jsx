import React, { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../../App";
import {
  addToCardAction,
  addToWatchListAction,
  removeToWatchListAction,
} from "../../app/store";

const SingleProduct = ({ product }) => {
  const [watchListStatus, setWatchListStatus] = useState(false);

  const { image, display, features, ports, price, resolution, name } = product;
  const { store, dispatch } = useContext(MyContext);
  // dispatch addtocard action
  const handleAddToCard = () => {
    dispatch(addToCardAction(product));
  };
  const handleAddToWatchList = () => {
    dispatch(addToWatchListAction(product));
    setWatchListStatus((prev) => !prev);
  };

  const handleRemoveToWatchList = () => {
    dispatch(removeToWatchListAction(product));
    setWatchListStatus((prev) => !prev);
  };

  console.log(store.watchList);
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
          {!watchListStatus && (
            <button
              disabled={watchListStatus}
              onClick={handleAddToWatchList}
              className="btn btn-sm btn-[#081621] hover:bg-[#ef4a23]"
            >
              Add TO Watch List
            </button>
          )}
          {watchListStatus && (
            <button
              disabled={!watchListStatus}
              onClick={handleRemoveToWatchList}
              className="btn btn-sm btn-[#081621] hover:bg-[#ef4a23] bg-[#ef4a23]"
            >
              Remove TO Watch List
            </button>
          )}

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
