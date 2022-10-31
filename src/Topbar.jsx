import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Topbar({ ItemCount }) {
  return (
    <>
      <div className="flex justify-between bg-[#fbfbfb] w-full  ">
        <div className=" px-12  ">
          <img
            className="h-32 w-48 "
            src="https://media.discordapp.net/attachments/1001501223750479953/1018031444859301948/20220908_130908_0000.jpg?width=468&height=468"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex  place-items-center mr-12 mt-4 font-bold hover:text-red-500 pr-2 rounded-lg h-12">
            <Link className="" to="/Cartpage">
              <AiOutlineShoppingCart className="w-12 h-12" />
            </Link>
          </div>
          <div className="flex justify-center ml-10 -mt-14  font-bold w-6 hover:text-red-600 bg-cyan-700 rounded-full">
            {ItemCount}
          </div>
        </div>
      </div>
    </>
  );
}
export default Topbar;
