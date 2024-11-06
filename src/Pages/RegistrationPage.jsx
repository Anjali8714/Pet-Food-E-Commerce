import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const validation = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string().min(8, "password too short").required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Registration form Data :", values);
    axios
      .post(`http://localhost:3001/user`, values)
      .then(() => navigate("/login"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-5 text-center">SignUp Here!</h1>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          cart: [],
          order: [],
          status: true,
        }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4">
          <div className="flex items-center border border-gray-300 p-3 rounded bg-gray-100">
            <MdPersonOutline className="text-gray-500 text-xl" />
            <Field
              type="text"
              placeholder="Username"
              name="username"
              className="border-none outline-none flex-1 pl-2 bg-transparent"
            />
          </div>
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500"
            
          />

          <div className="flex items-center border border-gray-300 p-3 rounded bg-gray-100">
            <MdOutlineMail className="text-gray-500 text-xl" />
            <Field
              type="email"
              placeholder="Email"
              name="email"
              className="border-none outline-none flex-1 pl-2 bg-transparent"
            />
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500"
            
          />

          <div className="flex items-center border border-gray-300 p-3 rounded bg-gray-100">
            <RxLockClosed className="text-gray-500 text-xl" />
            <Field
              type="password"
              placeholder="Password"
              name="password"
              className="border-none outline-none flex-1 pl-2 bg-transparent"
            />
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
            
          />

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600"
          >
            Sign UP
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
