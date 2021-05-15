import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {postUser} from '../api/api';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  userID: Yup.string()
    .min(3, "this must be 3 characters at minimum")
    .required("this is required"),
  firstname: Yup.string()
    .min(3, "Name must be 3 characters at minimum")
    .required("Name is required")
  
});

const LoginForm = () => {
  return (
    <div className="container">
      <div className="row mb-5">
      </div>
      <div className="row"><div className="col-2"></div>
        <div className="col">
          <Formik
            initialValues={{
                firstname: "",
                lastName: "",
                email: "", 
                userID: "",
                city:"",
                state:"",
                zip:"",
                phoneNumber:"+216 ",
                textInput:'',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values,{ setSubmitting }) => {
              postUser(values).then(()=>{
                  alert("success")
              }).catch(()=>{
                  alert("Faild")
              })
              setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="row g-3">
                  <div className="col-md-6 form-group">
                  <label htmlFor="firstname">first Name</label>
                  <Field
                    name="firstname"
                    placeholder="Enter first Name"
                    className={`form-control ${
                      touched.firstname && errors.firstname ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="firstname"
                    className="invalid-feedback"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastName">lastName</label>
                  <Field
                    name="lastName"
                    placeholder="Enter last Name"
                    className={`form-control`}
                  />
                  <ErrorMessage
                    component="div"
                    name="lastName"
                    className="invalid-feedback"
                  />
                </div>    

                <div className="col-md-12 form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="userID">userID</label>
                  <Field
                    type="password"
                    name="userID"
                    placeholder="Enter userID"
                    className={`form-control ${
                      touched.userID && errors.userID ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="userID"
                    className="invalid-feedback"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="city">City</label>
                  <Field
                    name="city"
                    placeholder="Enter City"
                    className={`form-control ${
                      touched.city && errors.city ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="city"
                    className="invalid-feedback"
                  />
                </div>

                <div className="col-md-4 form-group">
                  <label htmlFor="state">State</label>
                  <Field
                    name="state"
                    placeholder="Enter State"
                    className={`form-control ${
                      touched.state && errors.state ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="state"
                    className="invalid-feedback"
                  />
                </div>

                <div className="col-md-2 form-group">
                  <label htmlFor="zip">Zip</label>
                  <Field
                    name="zip"
                    placeholder="Enter Zip"
                    className={`form-control ${
                      touched.zip && errors.zip ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="zip"
                    className="invalid-feedback"
                  />
                </div>

                <div className="col form-group">
                  <label htmlFor="phoneNumber">phone Number</label>
                  <Field
                    name="phoneNumber"
                    placeholder="Enter phone Number"
                    className={`form-control ${
                      touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="phoneNumber"
                    className="invalid-feedback"
                  />
                </div>

                <div class="form-group">
                    <label htmlFor="exampleFormControlTextarea1">الامراض المزمنة</label>
                    <Field
                    name="textInput"
                    placeholder=""
                    className={`form-control ${
                      touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Continue"}
                </button>
              </Form>
            )}
          </Formik>
        </div><div className="col-2"></div>
      </div>
    </div>
  );
};
export default LoginForm;



