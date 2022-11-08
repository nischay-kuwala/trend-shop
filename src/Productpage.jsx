import React, { useState, useEffect } from "react";
import ProductData from "./ProductData";
import getAllData from "./GetData";
import NoMatch from "./NotFound";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Productpage() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Default");

  useEffect(function () {
    const list = getAllData();

    list.then(function (xyz) {
      let abc = xyz.data.products;
      console.log(xyz.data.products);
      setproductList(abc);

      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuerry = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuerry) != -1;
  });

  if (sort == "lowToHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "highToLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-10 bg-gray-200 mx-8 my-4">
        <div className="flex justify-end mb-4">
          <Link
            to="/Login"
            className="flex place-content-center rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-2 font-bold text-xl w-28  mr-4"
          >
            Login
          </Link>
          <Link
            to="/Register"
            className="flex place-content-center rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-2 font-bold text-xl w-28 "
          >
            Sign Up
          </Link>
        </div>
        <div className="flex justify-end ">
          <input
            className=" rounded-lg mr-4 border border-solid p-2 "
            value={query}
            placeholder="SEARCH"
            onChange={handleInputChange}
            type="search"
          />
          <select onChange={handleSortChange} className="rounded-lg">
            <option value="Default">DEFAULT Filter</option>
            <option value="highToLow">Price: high to low</option>
            <option value="lowToHigh">Price: low to high</option>
            <option value="name">Name</option>
            {/*  <option value="Cloths">CLOTHING</option>
            <option value="mugs">MUGS</option>*/}
          </select>
        </div>
        {data.length == 0 && <NoMatch />}
        {data.length > 0 && <ProductData allItem={data} />}
      </div>
      )
    </>
  );
}

export default Productpage;
