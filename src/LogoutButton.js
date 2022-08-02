import React from 'react';
import './LogoutButton.css'
import {auth} from '../src/firebase'
import {signOut} from 'firebase/auth'
import {useDispatch} from "react-redux";
import {logout} from "./features/userSlice";
import {useNavigate} from "react-router-dom";

function LogoutButton(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutOfApp = () => {
    return signOut(auth).then(() => {
      dispatch(logout())
      navigate('/')
    }).catch((error) => alert(error.message))
  }

  return (
    <button className='logoutButton' onClick={logoutOfApp}>
      Logout
    </button>
  );
}

export default LogoutButton;