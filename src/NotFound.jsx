import React from "react";
import { ImSad2 } from "react-icons/im";

function NoMatch() {
  return (
    <div className=" flex font-extrabold text-3xl pt-16 place-content-center text-yellow-700 underline">
      NO MATCH FOUND
      <ImSad2 className="ml-8 text-red-700" />
    </div>
  );
}
export default NoMatch;
