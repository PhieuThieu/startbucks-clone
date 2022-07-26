import React from 'react';
import './SignUpButton.css'
import {Link} from "@mui/material";

function SignUpButton(props) {
  return (
    <Link  to='/account/create'>
      <span className='signUpButton'>
        Join now
      </span>
    </Link>
  );
}

export default SignUpButton;