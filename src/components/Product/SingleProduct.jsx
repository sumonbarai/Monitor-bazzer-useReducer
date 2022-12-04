import React from "react";
import monitor from "../../assets/e22-g4-1-500x500.jpg";
const SingleProduct = () => {
  return (
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
  );
};

export default SingleProduct;
