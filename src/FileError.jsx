import React from "react";
import { Link } from "react-router-dom";
import { CgChevronLeftO } from "react-icons/cg";
function FileError() {
  return (
    <div className=" flex flex-col justify-center place-items-center m-4">
      <img
        className=" w-auto h-auto"
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1"
      />
      <Link className="flex font-bold item-center" to="/Productpage">
        <CgChevronLeftO className=" w-8 h-8  text-indigo-500" />
        Back to home
      </Link>
    </div>
  );
}
export default FileError;
