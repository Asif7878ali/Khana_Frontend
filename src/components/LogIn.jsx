import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addLoginUsers } from "./LoginDetailsSlice";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // setInitialState
  const emptyValues = {
    email: "",
    password: "",
  };
  //setValidation
  const regSchema = Yup.object({
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
  });

  //Submit Form
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: emptyValues,
      validationSchema: regSchema,
      onSubmit: async (values, action) => {
        action.resetForm();
        console.log("React Data", values);
        //Send Data to NodeJs
        const userLoginInfo = "http://localhost:5000/loginInfo";
        const userResult = await fetch(userLoginInfo, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responce = await userResult.json();
        console.log("Node Responce", responce);
        const { token, data } = responce;
        console.log(token);
        if (responce.message === "Invalid email/password") {
          notification.error({
            message: responce.message,
          });
        } else {
          notification.success({
            message: responce.message,
          });
          dispatch(addLoginUsers(data));
          localStorage.setItem("Token", JSON.stringify(token));

          navigate("/restuarent");
        }
      },
    });

  const visibilityPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Log in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action=""
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete=""
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600  block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-600">{errors.email}</p>
                  ) : null}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      autoComplete=""
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg   block w-full p-2.5 "
                      required
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
                </div>
                <div className="flex items-center justify-between">
                  <Link to="/forgetPassword">
                    <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Log in
                </button>
                <p className="text-sm  text-black">
                  Don’t have an account yet?
                  <Link to="/">
                    <span className="font-medium text-primary-600 hover:underline text-black cursor-pointer">
                      SignIn
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
