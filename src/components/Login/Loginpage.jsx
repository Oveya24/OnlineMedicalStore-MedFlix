import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';
import '../Login/Loginpage.css'
import {useEffect, useRef, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../../service/UserApi';

function Loginpage() {
  const [data,setdata]=useState([]);
  useEffect(()=>
  {
    const fetchData =async()=>
    {
       await getUserData ()
       .then((ress)=>setdata(ress.data))// inbuild data
       .catch((e)=>console.error(e));
    }
    fetchData();
  },[]);
  const nameRef=useRef();
const passwordRef=useRef();

const navigate=useNavigate();


const handleSubmitChangeSignIn=(event)=>{
    event.preventDefault();
    const name =nameRef.current.value;
    const password =passwordRef.current.value;
    const somedata=data.findIndex((props)=>props.email===name);
    console.log(somedata)
          if( somedata!==-1&& data[somedata].password===password) {
              navigate('/');
            
          }
          else if(somedata===-1)
          {
            alert("invalid password/emailid");
            navigate('/login');
          }
           }
      

  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://img.freepik.com/free-vector/medical-equipments-pills-white-background_1308-43344.jpg?size=626&ext=jpg&ga=GA1.1.19472705.1700452875&semt=ais"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Medflix: Your Pathway to Wellness and Care</h4>
            </div>

            <p>Please login to your account</p>
            <div>
            <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmitChangeSignIn}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <span className="link-primary" > 
                    <Link to={'/signup'}> Sign Up </Link> 
              </span>

            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                ref={nameRef}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={passwordRef}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
             
              <button type="submit" className="btn btn-primary" style={{backgroundColor:'green'}}>
                Submit
              </button>
              
            </div>
            <p className="text-center mt-2">
             <Link to={'/forget'}> Forgot password?</Link>
            </p>
          </div>
        </form>
      </div>
            </div>


            

           

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">🌟 Welcome to Medflix Medical Shop! 🌟

Your one-stop destination for all your healthcare needs. We're here to make your life healthier and happier. Explore our range of quality medicines and medical essentials from the comfort of your home.

At Medflix, your well-being is our priority. Trust us to deliver reliable and affordable healthcare solutions right to your doorstep.

Thank you for choosing Medflix. Here's to a healthier you!

Best regards,
The Medflix Team

              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Loginpage;