import React from "react";
import Product from "./Product";

function ProductData({ allItem }) {
  return (
    <div className="flex flex-wrap gap-2 ">
      {allItem.map(function (item) {
        return (
          <Product
            key={item.title}
            photo={item.thumbnail}
            category={item.category}
            title={item.title}
            price={item.price}
            {...item}
          />
        );
      })}
    </div>
  );
}
export default ProductData;
