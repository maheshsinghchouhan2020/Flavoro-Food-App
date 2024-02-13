import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { PropagateLoader } from "react-spinners";
import { FaArrowCircleLeft } from "react-icons/fa";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <Link to={"/"}>
        <div>
        <button className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-9 flex justify-center w-60"> <FaArrowCircleLeft className="mt-1 mr-3"/> Back To Home</button>
        </div>
      </Link>

      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
