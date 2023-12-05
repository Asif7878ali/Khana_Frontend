import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const navigate = useNavigate();
  // setInitialState
  const emptyValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  //setValidation
  const regSchema = Yup.object({
    first_name: Yup.string().min(3).max(10).required("Name is Required"),
    last_name: Yup.string().min(3).max(10).required("Name is Required"),
    email: Yup.string()
      .email("Enter a Valid E-mail")
      .required("E-mail is Required")
      .test("is-gmail", "Email domain must be @gmail.com", (value) => {
        if (value) {
          return value.endsWith("@gmail.com");
        }
        return false;
      }),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must meet the criteria"
      )
      .required("Please Enter Valid Password"),
    confirm_password: Yup.string()
      .required("Please Confirm Password")
      .oneOf([Yup.ref("password"), null], "Password Must Match"),
  });

  const visibilityPassword = () => {
    setShowPassword(!showPassword);
  };
  const visibilityConfirmPassword = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };

  //Submit Form
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: emptyValues,
      validationSchema: regSchema,
      onSubmit: async (values, action) => {
        action.resetForm();
        console.log("React Data", values);
        // Send Data to Nodejs
        //"http://localhost:5000/registerUsers"
        //"https://gifted-cap-cod.cyclic.app/registerUsers"
        try {
          const registerUser = "https://gifted-cap-cod.cyclic.app/registerUsers";
          const responce = await axios.post(registerUser, values);
          console.log("Node Responce", responce);

          const { message } = responce.data;

          notification.success({
            message: message,
          });
          navigate("/login");
        } catch (error) {
          console.warn("Error during fetch:", error);
          const { message } = error.response.data;
          console.log(message);
          notification.error({
            message: message,
          });
        }
      },
    });

  return (
    <>
      <div className="w-full bg-grey-lightest mt-2">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-gray-100 rounded shadow">
            <form
              className="space-y-4 md:space-y-6"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Register for a Account
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  {/* FirstName */}
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="first_name"
                      id="first_name"
                      type="text"
                      placeholder="Your First Name"
                      autoComplete=""
                      value={values.first_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.first_name && touched.first_name ? (
                      <p className="text-red-600">{errors.first_name}</p>
                    ) : null}
                  </div>

                  {/* LastName */}
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="last_name"
                      id="last_name"
                      type="text"
                      placeholder="Your Last Name"
                      autoComplete=""
                      value={values.last_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.last_name && touched.last_name ? (
                      <p className="text-red-600">{errors.last_name}</p>
                    ) : null}
                  </div>
                </div>

                {/* E-mail */}
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    autoComplete=""
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your E-mail Address"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-600">{errors.email}</p>
                  ) : null}
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      value={values.password}
                      autoComplete=""
                    />
                    <div
                      className="icon_button absolute right-4 top-14"
                      onClick={visibilityPassword}
                    >
                      {showPassword ? (
                        <RiEyeFill className="h-6 font-extralight" />
                      ) : (
                        <RiEyeOffFill className="h-6 font-extralight" />
                      )}
                    </div>
                  </div>
                  {errors.password && touched.password ? (
                    <p className="text-red-600">{errors.password}</p>
                  ) : null}

                  <p className="text-xs mt-1 text-red-600">
                    At least 8 characters
                  </p>
                </div>

                {/* ConfirmPassword */}
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                      type={confirmShowPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="confirm_password"
                      value={values.confirm_password}
                      autoComplete=""
                    />
                    <div
                      className="icon_button absolute right-4 top-14"
                      onClick={visibilityConfirmPassword}
                    >
                      {confirmShowPassword ? (
                        <RiEyeFill className="h-6 font-extralight" />
                      ) : (
                        <RiEyeOffFill className="h-6 font-extralight" />
                      )}
                    </div>
                  </div>

                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="text-red-600">{errors.confirm_password}</p>
                  ) : null}
                </div>

                {/* Button */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <p className="text-center my-4">
                    {" "}
                    I already have an account
                    <Link to="/login">
                      <span className="text-black hover:underline cursor-pointer text-sm font-bold">
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
