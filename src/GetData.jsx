import React from "react";
import axios from "axios";

function getAllData() {
  return axios.get("https://dummyjson.com/products");
}
export function getAllId(id) {
  return axios.get("https://dummyjson.com/products/" + id);
}
export default getAllData;
