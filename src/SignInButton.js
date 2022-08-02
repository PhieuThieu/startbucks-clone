import React from 'react';
import './SignInButton.css'
import {Link} from "react-router-dom";

function SignInButton(props) {
  return (<Link to='account/sign-in' className='signInButton'>
    Sign In
  </Link>)
}

export default SignInButton;