import React from "react";

const OrderItem = ({ product }) => {
  const { image, quantity } = product;
  return (
    <div className="bg-slate-50 flex items-center gap-5 p-4 m-4 rounded-lg">
      <figure>
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={image}
          alt="monitor"
        />
      </figure>
      <div>
        <h2 className="card-title">HP M22f 22" FHD IPS Monitor({quantity})</h2>
      </div>
    </div>
  );
};

export default OrderItem;
