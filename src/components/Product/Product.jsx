import React from "react";
import { useContext } from "react";

import { MyContext } from "../../App";

import monitor from "../../assets/e22-g4-1-500x500.jpg";
const Product = () => {
  const data = useContext(MyContext);
  console.log(data);
  return (
    <section className="product-area bg-slate-100 min-h-screen py-4">
      <div className="container mx-auto">
        <div className="section-heading py-5 uppercase">
          <h2 className="text-center text-3xl">Monitor Shop</h2>
        </div>

        <div className="all-product grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img className="w-full" src={monitor} alt="monitor" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">HP M22f 22" FHD IPS Monitor</h2>
              <ul className="list-disc p-4 text-base">
                <li>Resolution: FHD (1920 x 1080)</li>
                <li>Display: IPS, 75Hz, 5ms</li>
                <li>Ports: HDMI, VGA</li>
                <li>Features: Free Sync, Low Blue Light, Anti-glare</li>
              </ul>
              <h3 className="text-xl text-[#ef4a23] text-center">TK 23000</h3>
              <div className="card-actions justify-between">
                <button className="btn btn-sm btn-[#081621] hover:bg-[#ef4a23]">
                  Add TO Watch List
                </button>
                <button className="btn btn-sm btn-[#081621] hover:bg-[#ef4a23]">
                  Add TO Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
