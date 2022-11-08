import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

function Register() {
  function callRegisterApi(values) {
    console.log(
      "full name , email , password",
      values.fullname,
      values.email,
      values.confirmpassword
    );
  }

  const scehma = yup.object().shape({
    fullname: yup.string().required("Name is Mendatory"),
    email: yup
      .string()
      .required("Email is Mendatory")
      .email("Please enter a valid Email Address"),
    password: yup
      .string()
      .required("Password is Mendatory")
      .min(8, "Password must be at 8 char long"),
    confirmpassword: yup
      .string()
      .required("Password is Mendatory")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: callRegisterApi,
    validationSchema: scehma,
  });
  return (
    <>
      <div className="flex justify-center h-full w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col place-items-center h-98 w-100 p-8 bg-blue-400 rounded-lg my-8 shadow-2xl shadow-blue-700"
        >
          <div className="flex justify-center font-extrabold text-red-500 text-2xl my-4 shadow-2xl shadow-blue-400">
            REGISTER NOW
          </div>
          <label htmlFor="name" className="font-bold">
            Full Name
          </label>
          <input
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="text"
            required
            autoComplete="name"
            id="name"
            name="fullname"
            placeholder=" Full Name"
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <div className="text-red-500 font-semibold underline mb-2">
              {formik.errors.fullname}{" "}
            </div>
          )}

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
            autoComplete="current-email"
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
              {formik.errors.password}{" "}
            </div>
          )}
          <label htmlFor="password" className="font-bold">
            Confirm Password
          </label>
          <input
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="font-semibold  border border-solid mb-2 w-40 rounded-md"
            type="password"
            id="confirm-password"
            name="confirmpassword"
            placeholder=" Confirm Password"
            autoComplete="current-password"
            required
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword && (
            <div className="text-red-500 font-semibold underline mb-2">
              {formik.errors.confirmpassword}{" "}
            </div>
          )}
          <Link
            className="hover:underline text-lg hover:font-bold"
            to="/Productpage"
          >
            <button
              type="submit"
              className=" rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-xl w-28 "
            >
              SUBMIT
            </button>
          </Link>

          <div>
            Already have an account?{"  "}
            <Link
              className="hover:underline text-lg hover:text-red-600 hover:font-bold"
              to="/Login"
            >
              LOGIN
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
