import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // 1. create a submit function
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata )
    // setSubmiitting
    resetForm();

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logedin'
      })
      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data))
      navigate('/imageeditor');

    }else if((response.status === 401)){
      Swal.fire({
        icon : 'success',
        title : 'Login Failed'
      })
    }else{
      console.log('unknown error ocuured');
    }

  };


    // 2. data to store in database 


  //  3. locate form tag and use Formik

  return (
    <div className=" container ">
      <h1>Login page</h1>
      {/* <img src="images/pattern.png" alt='' /> */}
      <>
        {/* Section: Design Block */}
        <section className=" text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .rounded-t-5 {\n      border-top-left-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n\n    @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  ",
            }}
          />
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <Formik
                    initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>                  
                    { ( {values, handleSubmit, handleChange , isSubmiting}) => (
                      <form onSubmit={handleSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input type="email" id="email" value={values.email} onChange={handleChange}
                                  className="form-control"
                          />
                            
                          <label className="form-label" htmlFor="form2Example1">
                            Email address
                          </label>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                          <input
                            type="password" id="password" value={values.password}  onChange={handleChange}
                            
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form2Example2">
                            Password
                          </label>
                        </div>
                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                          <div className="col d-flex justify-content-center">
                            {/* Checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="form2Example31"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example31"
                              >
                                {" "}
                                Remember me{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            {/* Simple link */}
                            <a href="#!">Forgot password?</a>
                          </div>
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign in
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};

export default Login;
