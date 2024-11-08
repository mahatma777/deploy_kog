import React, {  useState } from "react";
import axios from "axios";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../Router/all_routes";
// import { Route, Routes } from "react-router-dom";

// export const getStaticProps = async () => {
//   const url  = 'https://kogiagile.org/kogi_agile/backend/server/login';

  
//   return {
//     props:{signindata:data}
//   }
// }

const Signin = () => {
  const route = all_routes;

  const [values, setValues] =useState({
    email:'',
    password:''
        })


    
    // const  navigate = useNavigate 
    axios.defaults.withCredentials =true;
    const handleSumbit= (event) =>{
    event.preventDefault();
    axios.post("https://kogiagile.org/kogi_agile/backend/server/login", values)
    .then(res => {
      if(res.data.Status === "Success"){
      
        // navigate('signinThree');

window.location.href = 'admin-dashboard';
      }
      else {
        alert("Error");
      }
    })
    .then(err => console.log(err));}
      
    


  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper bg-img">
          
          <div className="login-content">
          <form onSubmit={handleSumbit} >
              <div className="login-userset">
                <div className="login-logo logo-normal">
                  <ImageWithBasePath src="assets/img/logo-white.png" alt="img" />
                </div>
                <Link to={route.dashboard} className="login-logo logo-white">
                  <ImageWithBasePath src="assets/img/logo-white.png" alt />
                </Link>
                <div className="login-userheading">
                  <h3>Sign In</h3>
                  <h4>
                   SUPER ADMIN DASHBAORD || KOGI 
                  </h4>
                </div>
                <div className="form-login mb-3">
                  <label className="form-label">Email Address</label>
                  <div className="form-addons">
                    <input type="email" className="form- control" name="email"  onChange={e =>setValues({...values, email: e.target.value}) 
                   } />
                    <ImageWithBasePath
                      src="assets/img/icons/mail.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="form-login mb-3">
                  <label className="form-label">Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="pass-input form-control" name="password"  onChange={e =>setValues({...values, password: e.target.value}) 
                    }
                    />
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
                <div className="form-login authentication-check">
                  <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                      <div className="custom-control custom-checkbox">
                        <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                          <input type="checkbox" className="form-control" />
                          <span className="checkmarks" />
                          Remember me
                        </label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to={route.forgotPassword}>
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-login">
                 

                  <button  className="btn btn-login"  > Login </button>

               
                </div>
                <div className="signinform">
                  <h4>
                    New on our platform?
                    <Link to={route.register} className="hover-a">
                      {" "}
                      Create an account
                    </Link>
                    <Link to={route.signintwo} className="hover-a">
                      {" "}
                   
                    </Link>
                   
                  </h4>
                </div>
                <div className="form-setlogin or-text">
                  <h4>POWERED BY</h4>
                </div>
                <div className="form-sociallink">
              
                  <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p >KOGISTATE MINNISTRY <br>
                    </br> OF EDUCATION</p>
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#00ba00',
//     padding: 10
//   }
// })
export default Signin;

