import React from "react";
import { Link, useParams } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col place-items-center h-98 w-92 p-8 bg-blue-400 rounded-lg my-8 shadow-2xl shadow-blue-700">
          <div className="flex justify-center font-extrabold text-red-500 text-2xl my-4 shadow-2xl shadow-blue-400">
            LOGIN
          </div>
          <lable className="text-bold">Email</lable>
          <input
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="email"
            id="email"
            placeholder="Email Address"
          />
          <lable className="text-bold">Password</lable>
          <input
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="password"
            id="password"
            placeholder="Password"
          />
          <button className=" rounded-lg bg-orange-500 font-bold text-xl w-28 ">
            SUBMIT
          </button>
          <div>
            Already have an account?
            <Link
              className="hover:underline text-lg hover:text-red-600"
              to="/Register"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
