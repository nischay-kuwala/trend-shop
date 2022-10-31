import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function Cartpage() {
  // const [x , setx] = useState(1);
  // function handleinput()
  //   {
  //     setx(+event.target.value)
  //   }
  return (
    <>
      <div className="flex flex-col mt-20 mx-32">
        <div className="flex font-bold border border-solid rounded-lg h-8">
          <h1 className="ml-80">Product</h1>
          <h1 className="ml-60">Price</h1>
          <h1 className="ml-20">Quantity</h1>
          <h1 className="ml-20">Subtotal</h1>
        </div>
        <div className="flex font-bold border border-solid  h-24 rounded-lg">
          <MdOutlineCancel className="text-3xl mt-6 ml-10 fill-gray-300"></MdOutlineCancel>
          <div className="w-32 h-32 ml-10 ">
            <img
              className="rounded-lg hover:shadow-lg hover:shadow-black my-2"
              src="https://images.unsplash.com/photo-1611274757139-03ff1736701d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            />
          </div>
          <div className="font-bold ml-24 text-red-500 h-6 mt-4 hover:text-blue-300">
            Black printed coffee
          </div>
          <div className="font-bold ml-44 h-6 mt-4">$33</div>
          <input
            className="font-bold text-black ml-20 h-6 mt-4 w-6 border border-solid rounded-lg"
            // onChnage={handleinput}
            min="1"
            placeholder="1"
            type="number"
            // value={x}
          />
          <div className="font-bold ml-24 h-6 mt-4">$33</div>
        </div>
        <div className="flex font-bold border border-solid  h-24 rounded-lg">
          <MdOutlineCancel className="text-3xl mt-6 ml-10 fill-gray-300"></MdOutlineCancel>
          <div className="w-32 h-32 ml-10 ">
            <img
              className="rounded-lg hover:shadow-lg hover:shadow-black my-2"
              src="https://images.unsplash.com/photo-1611274757139-03ff1736701d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            />
          </div>
          <div className="font-bold ml-24 text-red-500 h-6 mt-4 hover:text-blue-300">
            Black printed coffee
          </div>
          <div className="font-bold ml-44 h-6 mt-4">$33</div>
          <input
            className="font-bold text-black ml-20 h-6 mt-4 w-6 border border-solid rounded-lg"
            // onChnage={handleinput}
            min="1"
            placeholder="1"
            type="number"
            // value={x}
          />
          <div className="font-bold ml-24 h-6 mt-4">$33</div>
        </div>
        <div className="flex font-bold border border-solid mb-8 h-16 rounded-lg justify-between">
          <div>
            <input
              className="font-bold text-black ml-20 h-10 mt-4 w-32 border border-solid rounded-lg text-center"
              placeholder="COUPON CODE"
              type="text"
            />
            <button className="bg-red-500 h-10 mt-4 w-36 rounded-lg ml-4 hover:bg-blue-300">
              APPLY COUPON
            </button>
          </div>
          <div>
            <button className="bg-red-500 h-10 mt-4 w-36 rounded-lg ml-4 mr-4 hover:bg-blue-300">
              UPDATE CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-32">
        <div className="flex flex-col mt-10  mb-10">
          <div className="flex font-extrabold border border-solid  rounded-lg w-80 h-8 justify-center">
            <h1 className="">CART TOTALS</h1>
          </div>
          <div className="flex flex-col font-bold border border-solid rounded-lg w-80 h-48">
            <div className="flex font-bold border border-b-2 border-x-0 border-t-0 mx-4 mt-8">
              <h1 className=" ">Subtotal</h1>
              <p className=" ml-32">$66</p>
            </div>
            <div className=" flex font-bold border border-b-2 border-x-0 border-t-0 mb-4 mx-4 mt-4">
              <h1 className="mr-3">Total </h1>
              <p className=" ml-36">$66</p>
            </div>
            <div className="flex justify-center">
              <button className="bg-red-500 h-10 mt-4 w-60 rounded-lg ml-4 mr-4 hover:bg-blue-300">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cartpage;
