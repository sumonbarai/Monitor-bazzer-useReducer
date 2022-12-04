import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../App";
import {
  errorProductAction,
  requestProductAction,
  successProductAction,
} from "../../app/store";
import Card from "../shared/Card";

import SingleProduct from "./SingleProduct";
const Product = () => {
  const { store, dispatch } = useContext(MyContext);
  useEffect(() => {
    dispatch(requestProductAction());
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => dispatch(successProductAction(data)))
      .catch(() => dispatch(errorProductAction()));
  }, [dispatch]);

  // what to render
  let content = "";
  if (store.data.loading) {
    content = <p className="text-center capitalize text-2xl">Loading...</p>;
  } else if (store.data.error) {
    content = <p>{store.data.error}</p>;
  } else if (store.data.product?.length <= 0) {
    content = (
      <p className="text-center capitalize text-2xl">
        there are no product in store
      </p>
    );
  } else if (store.data.product?.length > 0) {
    content = store.data.product.map((p) => (
      <SingleProduct key={p._id} product={store.data.product} />
    ));
  }
  return (
    <section className="product-area bg-slate-100 min-h-screen py-4">
      <div className="container mx-auto">
        <div className="section-heading py-5 uppercase">
          <h2 className="text-center text-3xl">Monitor Shop</h2>
        </div>
        <div className="all-product grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {content}
        </div>
      </div>
      <Card />
    </section>
  );
};

export default Product;
