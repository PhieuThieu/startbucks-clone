import React from 'react';
import './SignUpButton.css'
import {Link} from "react-router-dom";

function SignUpButton(props) {
  return (
    <Link to='account/signup' className='signUpButton'>
        Join now
    </Link>
  );
}

export default SignUpButton;