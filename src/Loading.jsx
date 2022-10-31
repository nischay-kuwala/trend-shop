import React from "react";
import { BiDizzy } from "react-icons/bi";
function Loading() {
  return (
    <div className="flex flex-col h-screen text-6xl text-black font-bold item-center justify-center  place-items-center">
      <BiDizzy className="animate-bounce text-red-600 " />
      <div className=" text-2xl text-red-800 animate-pulse"> Loading...</div>
    </div>
  );
}
export default Loading;
