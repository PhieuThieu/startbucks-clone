import React, {useState} from 'react';
import './SignupForm.css'
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import FormSubmit from "./FormSubmit";
import {ErrorMessage} from '@hookform/error-message'
import CloseIcon from "@mui/icons-material/Close";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";
import {useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'

function SignupForm() {
  const {register, setValue, handleSubmit, formState: {errors}} = useForm()
  const fNameRef = {...register('fName', {required: {value: true, message: 'Enter your first name.'}})}
  const lNameRef = {...register('lName', {required: {value: true, message: 'Enter your last name.'}})}
  const emailRef = {...register('email', {required: {value: true, message: 'Enter an email.'}})}
  const passwordRef = {...register('password', {required: {value: true, message: 'Enter an password.'}})}
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [passwordShown, setPasswordShown] = useState(false)

  const onSubmit = ({fName, lName, email, password}) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email, uid: userAuth.user.uid, displayName: fName,
            }));
            navigate("/menu");
          });
      })
      .catch((error) => alert(error.message));
  }

  return (<div className='signupForm'>
    <div className="signupForm__container">
      <form action="" className="signupForm__form" onSubmit={handleSubmit(onSubmit)}>

        <h4 className="signupForm__section">Personal Information</h4>
        <div className="signupForm__inputContainer">
          <TextField
            name='fName'
            type='text'
            label='First name'
            className='signupForm__input'
            InputLabelProps={{style: {color: 'rgba(0, 0, 0, .56)'}}}
            InputProps={{style: {fontWeight: '800'}}}
            inputRef={fNameRef.ref}
            onChange={e => setValue('fName', e.target.value)}
          />
          <ErrorMessage
            name='fName'
            errors={errors}
            render={({message}) => (<div className="loginScreen__error">
              <CloseIcon fontSize="small"/>
              <span>{message}</span>
              <ReportGmailerrorredIcon
                fontSize="small"
                className="loginScreen__reportIcon"
              />
            </div>)}
          />
        </div>

        <div className="signupForm__inputContainer">
          <TextField
            name='lName'
            type='text'
            label='Last name'
            className='signupForm__input'
            InputLabelProps={{style: {color: 'rgba(0, 0, 0, .56)'}}}
            InputProps={{style: {fontWeight: '800'}}}
            inputRef={lNameRef.ref}
            onChange={e => setValue('lName', e.target.value)}
          />
          <ErrorMessage
            name='lName'
            errors={errors}
            render={({message}) => (<div className="loginScreen__error">
              <CloseIcon fontSize="small"/>
              <span>{message}</span>
              <ReportGmailerrorredIcon
                fontSize="small"
                className="loginScreen__reportIcon"
              />
            </div>)}
          />
        </div>

        <h4 className="signupForm__section">Account Security</h4>
        <div className="signupForm__inputContainer">
          <TextField
            name='email'
            type='email'
            label='Email address'
            className='signupForm__input'
            InputLabelProps={{style: {color: 'rgba(0, 0, 0, .56)'}}}
            InputProps={{style: {fontWeight: '800'}}}
            inputRef={emailRef.ref}
            onChange={e => setValue('email', e.target.value)}
          />
          <ErrorMessage
            name='email'
            errors={errors}
            render={({message}) => (<div className="loginScreen__error">
              <CloseIcon fontSize="small"/>
              <span>{message}</span>
              <ReportGmailerrorredIcon
                fontSize="small"
                className="loginScreen__reportIcon"
              />
            </div>)}
          />
        </div>

        <div className="signupForm__inputContainer">
          <TextField
            name='password'
            type={passwordShown ? 'text' : 'password'}
            label='Your password'
            className='signupForm__input'
            InputLabelProps={{style: {color: 'rgba(0, 0, 0, .56)'}}}
            InputProps={{style: {fontWeight: '800'}}}
            inputRef={passwordRef.ref}
            onChange={e => setValue('password', e.target.value)}
          />
          {passwordShown ? (<VisibilityOutlinedIcon
            onClick={() => setPasswordShown(!passwordShown)}
            className='loginScreen__visibilityIcon'
          />) : (<VisibilityOffOutlinedIcon
            onClick={() => setPasswordShown(!passwordShown)}
            className='loginScreen__visibilityIcon'
          />)}
          <ErrorMessage
            name='password'
            errors={errors}
            render={({message}) => (<div className="loginScreen__error">
              <CloseIcon fontSize="small"/>
              <span>{message}</span>
              <ReportGmailerrorredIcon
                fontSize="small"
                className="loginScreen__reportIcon"
              />
            </div>)}
          />
        </div>

        <h4 className="signupForm__rewards">
          COLLECT MORE STARS & EARN REWARDS
        </h4>
        <span className="signupForm__span">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </span>

        <FormSubmit name='Create account' type='submit'/>
      </form>
    </div>
  </div>);
}

export default SignupForm;