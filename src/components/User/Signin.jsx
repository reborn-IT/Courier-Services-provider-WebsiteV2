import React, { useState } from "react";
import "../User/signup.css";
import { useSpring, animated } from "react-spring";
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { useEffect } from "react";
import { Navigate } from 'react-router';
import { Link } from "react-router-dom";


const clientId = "32648725058-a48in69741qllnd7hodlkkea5fuihvf5.apps.googleusercontent.com";


function Signin() {

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [customError, setCustomError] = useState();
    const handleClick = () => setClick(!click);
    const [click, setClick] = React.useState(false);

    {/*async function PostHandler() {
        await axios.post("https://localhost:3006/api/v1/user/addUser",{
            username: username,
            password: password,
            role: role,
              
            headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin":"https://localhost:3000",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",

        },
    }).then(response => {
            setRedirect(true);
        }).catch(function (error) {
            if (error.response) {
                setCustomError("Can't register new account");
            } else if (error.request) {
                setCustomError('Internal Server Error');
            } else {
                setCustomError("Can't register new account");
            }
        })
    }*/}

    {/*if (redirect) {
        return (
            <Navigate to="/home" />
        )
    }

    if (customError !== undefined) {
        return (
            <div>
                {customError}
            </div>
        )
    }

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:' , res.profileObj);
    };

    const onFailure = (res) =>{
        console.log('[Login Failed] res:', res)
    };*/}

  return(
    <div className="signup">
    <div className="signup-form">
    {/* <div className="signup-image">
        <h1>Welcome To ...........</h1>
    </div> */}
    <div className="signup-content">
        <h1>Signin</h1>
        <div>
            <input className="text" type="text" name="" id="username" placeholder="UserName" />
        </div>

        <div>
            <input className="text" type="password" name="" id="password" placeholder="Password" />
        </div>

        
        
        
        <button type="submit" className="signup-button">Login</button>

        <div className="or">
            OR
        </div>
      <div className="googlelogin">
      {/* <GoogleLogin
            clientId={clientId}
            buttonText="Continue with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px', alignContent: 'center' }} 
            isSignedIn={true}
        /> */}
        </div>
        <div className="new-text">
        <Link
            exact
            to="/signup"
            activeClassName="active"
            onClick={click ? handleClick : null}
        >   <br />
            Register new accout
        </Link>
            
        </div>
    </div>
</div>
</div>

  )
}

export default Signin;