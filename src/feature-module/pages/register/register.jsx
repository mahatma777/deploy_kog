
import React, { useState } from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../Router/all_routes";

import axios from "axios";
const Register = () => {
  const route = all_routes;

const [values, setValues] =useState({
name:'',
email:'',
password:''
    })

// const  navigate = useNavigate 
const handleSumbit= (event) =>{
event.preventDefault();
axios.post('http://localhost:8082/register', values)
.then(res => {
if(res.data.Status === "Success"){
alert("scces");
}
  else {
    alert("Error");
  }
})
.then(err => console.log(err));}
  

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper register-wrap bg-img">
          <div className="login-content">
            <form onSubmit={handleSumbit} >
              <div className="login-userset">
                <div className="login-logo logo-normal">
                  <ImageWithBasePath src="assets/img/logo.png" alt="img" />
                </div>
                <Link to={route.dashboard} className="login-logo logo-white">
                  <ImageWithBasePath src="assets/img/logo-white.png" alt />
                </Link>
                <div className="login-userheading">
                  <h3>Register</h3>
                  <h4>Create New Dreamspos Account</h4>
                </div>
                <div className="form-login">
                  <label>Name</label>
                  <div className="form-addons">
                    <input type="text" name="name" className="form-control" onChange={e =>setValues({...values, name: e.target.value}) 
                   } />
                    <ImageWithBasePath
                      src="assets/img/icons/user-icon.svg"
                      alt="img" 
                    />
                  </div>
                </div>
                <div className="form-login">
                  <label>Email Address</label>
                  <div className="form-addons">
                    <input type="email" className="form-control" name="email"  onChange={e =>setValues({...values, email: e.target.value}) 
                   } />
                    <ImageWithBasePath
                      src="assets/img/icons/mail.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="form-login">
                  <label>Password</label>
                  <div className="pass-group">
                    <input type="password" className="pass-input" name="password"    onChange={e =>setValues({...values, password: e.target.value}) 
                   }/>
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
                {/* <div className="form-login">
                  <label>Confirm Passworrd</label>
                  <div className="pass-group">
                    <input type="password" className="pass-inputs" />
                    <span className="fas toggle-passwords fa-eye-slash" />
                  </div>
                </div> */}
                <div className="form-login authentication-check">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="custom-control custom-checkbox justify-content-start">
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                            <input type="checkbox" />
                            <span className="checkmarks" />I agree to the{" "}
                            <Link to="#" className="hover-a">
                              Terms &amp; Privacy
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-login">
                  {/* <Link to={route.signup} className="btn btn-login">
                    Sign Up
                  </Link> */}
                  <button   className="btn btn-login" > Register </button>
                </div>
                <div className="signinform">
                  <h4>
                    Already have an account ?{" "}
                    <Link to={route.signin} className="hover-a">
                      Sign In Instead
                    </Link>
                  </h4>
                </div>
                <div className="form-setlogin or-text">
                  <h4>OR</h4>
                </div>
                <div className="form-sociallink">
                  <ul className="d-flex">
                    <li>
                      <Link to="#" className="facebook-logo">
                        <ImageWithBasePath
                          src="assets/img/icons/facebook-logo.svg"
                          alt="Facebook"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/google.png"
                          alt="Google"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="apple-logo">
                        <ImageWithBasePath
                          src="assets/img/icons/apple-logo.svg"
                          alt="Apple"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                  <p>Copyright © 2023 DreamsPOS. All rights reserved</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
