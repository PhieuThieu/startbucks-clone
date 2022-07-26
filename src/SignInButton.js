import React from 'react';
import './SignInButton.css'
import {Link} from "@mui/material";

function SignInButton(props) {
  return (<Link  to='/account/signin'>
      <span className='signInButton'>
        Sign In
      </span>
    </Link>);
}

export default SignInButton;