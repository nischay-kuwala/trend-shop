import React from "react";
import { Link } from "react-router-dom";
function Product(props) {
  return (
    <div className="justify-center content-center m-2  ">
      <Link to={"/Detail/" + props.id}>
        <img
          className="w-64 h-64 object-cover border-4 border-white "
          src={props.photo}
        />

        <p className="text-gray-500 text-xs">{props.category}</p>
        <h1 className="text-xl w-64">{props.title}</h1>

        <h1 className="font-bold">₹{props.price}</h1>
      </Link>
    </div>
  );
}

export default Product;
