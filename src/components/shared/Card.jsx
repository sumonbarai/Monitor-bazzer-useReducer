import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Card = () => {
  const { store, dispatch } = useContext(MyContext);
  const TotalQuantity = store?.card?.reduce(
    (total, current) => total + current.quantity,
    0
  );

  const navigate = useNavigate();
  const handleCard = () => {
    navigate("/shoppingCard");
  };
  return (
    <div className="indicator fixed bottom-16 right-10">
      <span className="indicator-item badge bg-[#FF0000] text-white border-none">
        {TotalQuantity}
      </span>
      <button onClick={handleCard} id="card-btn" className="btn bg-[#081621]">
        card
      </button>
    </div>
  );
};

export default Card;
