import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";

const Contact = () => {
  const token = localStorage.getItem("Token");
  const isLogin = JSON.parse(token);

  // setInitialState
  const emptyValues = {
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    message: "",
  };

  //setValidation
  const regSchema = Yup.object({
    first_name: Yup.string().min(3).max(10).required("Name is Required"),
    last_name: Yup.string().min(3).max(10).required("Full Name is Campalsary"),
    email: Yup.string()
      .email("Enter a Valid E-mail")
      .required("E-mail is Required")
      .test("is-gmail", "Email must be @gmail.com", (value) => {
        if (value) {
          return value.endsWith("@gmail.com");
        }
        return false;
      }),
    number: Yup.string().test(
      "is-ten-digits",
      "Phone number must be 10 digits",
      (value) => {
        if (value && value.length === 10) {
          return true;
        }
        return false;
      }
    ),
    message: Yup.string().min(20).max(200),
  });

  //Submit Form
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: emptyValues,
      validationSchema: regSchema,
      onSubmit: async (values, action) => {
        action.resetForm();
        console.log("React Data", values);
        //send data to Nodesjs
        const contactUrl = "http://localhost:2000/contactUs";
        const result = await fetch(contactUrl, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await result.json();
        console.log("node responce", data);

        notification.success({
          message: "Sent Success",
        });
      },
    });

  return (
    <>
      {isLogin ? (
        <div className="container mt-10 px-4 lg:pl-80">
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full bg-slate-200 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Contact us a <br /> message
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="first_name"
                    placeholder="First Name*"
                    value={values.first_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.first_name && touched.first_name ? (
                    <p className="text-red-600">{errors.first_name}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="last_name"
                    placeholder="Last Name*"
                    value={values.last_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.last_name && touched.last_name ? (
                    <p className="text-red-600">{errors.last_name}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-600">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    name="number"
                    placeholder="Phone*"
                    value={values.number}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.number && touched.number ? (
                    <p className="text-red-600">{errors.number}</p>
                  ) : null}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  name="message"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></textarea>
                {errors.message && touched.message ? (
                  <p className="text-red-600">{errors.message}</p>
                ) : null}
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Please Login</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
