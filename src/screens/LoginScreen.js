import React, {useEffect, useState} from 'react';
import './LoginScreen.css'
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import FooterSecondary from "../FooterSecondary";
import FormSubmit from "../FormSubmit";
import {auth} from "../firebase";
import {useDispatch} from "react-redux";
import {login} from '../features/userSlice'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {ErrorMessage} from "@hookform/error-message";

function LoginScreen(props) {
  const {register, handleSubmit, setValue, formState: {errors}} = useForm();
  const [passwordShown, setPasswordShown] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailRegister = register('email', {required: 'Enter an email.'})
  const passwordRegister = register('password', {required: true})


  //Firebase Auth
  const onSubmit = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
        }))
        navigate('/menu')
      })
      .catch((error) => alert(error.message))
  }

  return (<div className='loginScreen'>
    <div className="loginScreen__left">
      <Link to='/'>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          alt=""/>
      </Link>
      <div className="loginScreen__info">
        <h1>Sign in or create an account</h1>
      </div>
    </div>
    <div className="loginScreen__right">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="loginScreen__inputContainer">
          <TextField
            name="email"
            label="Email Address"
            type="email"
            variant="standard"
            InputLabelProps={{
              style: {color: "rgba(0,0,0,.56)"},
            }}
            InputProps={{style: {fontWeight: "800"}}}
            className="loginScreen__input"
            onChange={e => setValue('email', e.target.value)}
            inputRef={emailRegister.ref}
          />
          <ErrorMessage errors={errors} name="email" render={({message}) => (
            <div className="loginScreen__error">
              <CloseIcon fontSize="small"/>
              <span>{message}</span>
              <ReportGmailerrorredIcon
                fontSize="small"
                className="loginScreen__reportIcon"
              />
            </div>
          )}/>
        </div>


        <div className="loginScreen__inputContainer">
          <TextField
            label="Password"
            name='password'
            type={passwordShown ? 'text' : "password"}
            variant="standard"
            InputLabelProps={{style: {color: 'rgba(0,0,0,.56)'}}}
            InputProps={{style: {fontWeight: '800'}}}
            className='loginScreen__input'
            onChange={e => setValue('password', e.target.value)}
            // onBlur={e => e.target.value.length === 0 ? setError("password", {}) : clearErrors('password')}
            inputRef={passwordRegister.ref}
          />
          {passwordShown ? (<VisibilityOutlinedIcon
            onClick={() => setPasswordShown(!passwordShown)}
            className='loginScreen__visibilityIcon'
          />) : (<VisibilityOffOutlinedIcon
            onClick={() => setPasswordShown(!passwordShown)}
            className='loginScreen__visibilityIcon'
          />)}

          <ErrorMessage errors={errors} name="password" render={({message}) => (
            <div className="loginScreen__error">
              <CloseIcon fontSize="small"/>
              <span>{message}</span>
              <ReportGmailerrorredIcon
                fontSize="small"
                className="loginScreen__reportIcon"
              />
            </div>
          )}/>
        </div>

        <div className="loginScreen__resetLinks">
          <Link to='/'>Forgot your username?</Link>
          <Link to='/'>Forgot your password?</Link>
        </div>
        <FormSubmit name='Sign in' type='submit'/>
      </form>

      <div className="loginScreen__rewards">
        <h4>JOIN STARBUCKS® REWARDS</h4>
      </div>
      <div className="loginScreen__joinNow">
        <div className="loginScreen__joinNowContainer">
          <Link to='/account/signup'>Join now</Link>
          <h4>Create an account and bring on the Rewards!</h4>
          <p>
            Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and
            more.
          </p>
        </div>
        <FooterSecondary alignItems='center' paddingLeft={30} flexDirection='column'/>
      </div>
    </div>

  </div>);
}

export default LoginScreen;