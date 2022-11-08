import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

function Login() {
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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callloginapi,
    validationSchema: schema,
  });

  return (
    <>
      <div className="flex justify-center h-full w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col place-items-center h-98 w-100 p-8 bg-blue-400 rounded-lg my-8 shadow-2xl shadow-blue-700"
        >
          <div className="flex justify-center font-extrabold text-red-500 text-2xl my-4 shadow-2xl shadow-blue-400">
            LOGIN
          </div>
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="email"
            required
            autoComplete="email"
            id="email"
            name="email"
            placeholder=" Email Address"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 font-semibold underline mb-2">
              {formik.errors.email}
            </div>
          )}
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder=" Password"
            autoComplete="current-password"
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 font-semibold underline mb-2">
              {formik.errors.password}
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
export default Login;
