import React, { useContext } from "react";
import { MyContext } from "../App";
import SingleProduct from "../components/Product/SingleProduct";
import Card from "../components/shared/Card";

const WatchList = () => {
  const { store, dispatch } = useContext(MyContext);
  // what to render
  let content = "";
  if (store.watchList?.length < 1) {
    content = (
      <p className="text-center capitalize text-2xl">
        No Product Added in WatchList
      </p>
    );
  } else if (store.watchList?.length >= 1) {
    content = store.watchList.map((p) => (
      <SingleProduct key={p._id} product={p} />
    ));
  }
  return (
    <section className="product-area bg-slate-100 min-h-screen py-4">
      <div className="container mx-auto">
        <div className="section-heading py-5 uppercase">
          <h2 className="text-center text-3xl">
            ALL Monitor You have Added WatchList
          </h2>
        </div>
        <div className="all-product grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {content}
        </div>
      </div>
      <Card />
    </section>
  );
};

export default WatchList;
