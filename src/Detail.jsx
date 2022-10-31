import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CgChevronLeftO } from "react-icons/cg";
import { ImUndo2, ImRedo2 } from "react-icons/im";
import { getAllId } from "./GetData";
import FileError from "./FileError";
import Loading from "./Loading";

function Detail({ onAddToCart }) {
  const id = +useParams().id;
  const [productlist, setproductlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Count, setCount] = useState(1);

  function Countvalue() {
    setCount(+event.target.value);
  }
  function handleButtonClick() {
    onAddToCart(id, Count);
  }
  function inputChange() {
    setCount(1);
  }

  useEffect(
    function () {
      const ab = getAllId(id);
      ab.then((response) => {
        const set = response.data;
        setLoading(false);
        setproductlist(set);
      });
      // .catch(() => {
      //   // setLoading(false);
      //   console.log("nahi chla");
      //   setLoading(false);

      //   // if (!ab) {
      //   //   return <FileError />
      //   // }
      // });
    },
    [id]
  );

  return (
    <div className="flex flex-col ">
      <div className="flex place-content-center pt-16 bg-gray-200 ">
        {(loading && <Loading />) || (
          <>
            <div className=" bg-white shadow-lg mx-auto my-4 w-auto h-auto">
              <div className="flex flex-wrap place-content-center ">
                <Link className="" to="/Productpage">
                  <CgChevronLeftO className=" w-8 h-8  text-indigo-500" />
                </Link>
                <div className="flex place-content-center m-2  ">
                  <img
                    className="w-80 h-80 object-cover border border-black rounded-xl"
                    src={productlist.thumbnail}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="text-gray-500 text-xs">
                      {productlist.category}
                    </div>
                  </div>
                  <div className="text-xl font-extrabold pb-4 ">
                    {productlist.title}
                  </div>
                  <div className="flex grow-1 text-xs w-64">
                    {productlist.description}
                  </div>

                  <div className="font-bold mt-8 mx-4">
                    {" "}
                    ₹{productlist.price}
                  </div>
                  <span className="w-full h-12"></span>
                  <div className="flex justify-between">
                    <input
                      min="1"
                      onChange={Countvalue}
                      value={Count}
                      type="number"
                      className="font-bold border border-solid w-12 h-6 rounded-md  flex justify-center"
                    />
                    <button
                      onClick={handleButtonClick}
                      className="bg-red-500 border hover:border-4 border-black hover:h-14 hover:border-black flex justify-center  w-28 h-8 text-white shadow-lg rounded-lg hover:bg-blue-300 hover:text-black hover:font-bold mr-4"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  {id > 1 && (
                    <Link
                      onClick={inputChange}
                      className="flex item-center hover:bg-yellow-300
  rounded-lg "
                      to={"/Detail/" + (id - 1)}
                    >
                      <ImUndo2 className=" w-8 h-8  text-indigo-500 " />
                      UNDO
                    </Link>
                  )}
                </div>
                <Link
                  onClick={inputChange}
                  className="flex item-center hover:bg-yellow-300 rounded-lg "
                  to={"/Detail/" + (id + 1)}
                >
                  <ImRedo2 className=" w-8 h-8  text-indigo-500 " />
                  REDO
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <span className="grow"></span>
    </div>
  );
}
export default Detail;
