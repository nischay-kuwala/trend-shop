import { withFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

function callloginapi(values) {
  console.log("email & password", values.email, values.password);
}
const schema = yup.object().shape({
  email: yup.string().required().email("Please enter a valid Email Address"),
  password: yup
    .string()
    .required()
    .min(10, "Password must be at least 10 characters long"),
});

const initialValues = {
  email: "",
  password: "",
};
export function Login({
  handleBlur,
  handleChange,
  touched,
  errors,
  handleSubmit,
  values,
}) {
  return (
    <>
      <div className="flex justify-center h-full w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col place-items-center h-98 w-100 p-8 bg-blue-400 rounded-lg my-8 shadow-2xl shadow-blue-700"
        >
          <div className="flex justify-center font-extrabold text-red-500 text-2xl my-4 shadow-2xl shadow-blue-400">
            LOGIN
          </div>
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="email"
            required
            autoComplete="email"
            id="email"
            name="email"
            placeholder=" Email Address"
          />
          {touched.email && errors.email && (
            <div className="text-red-500 font-semibold underline mb-2">
              {errors.email}
            </div>
          )}
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder=" Password"
            autoComplete="current-password"
            required
          />
          {touched.password && errors.password && (
            <div className="text-red-500 font-semibold underline mb-2">
              {errors.password}
            </div>
          )}
          <button
            type="submit"
            className=" rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-xl w-28  mb-4"
          >
            SUBMIT
          </button>
          <div>
            To create a new account?{"  "}
            <Link
              className="hover:underline text-lg hover:text-red-600 hover:font-bold"
              to="/Register"
            >
              REGISTER NOW
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
const myHOC = withFormik({
  handleSubmit: callloginapi,
  initialValues: initialValues,
  validationSchema: schema,
});

const Easylogin = myHOC(Login);

export default Easylogin;
