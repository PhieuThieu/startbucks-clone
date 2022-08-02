import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import {Fade} from 'react-awesome-reveal'
import HomeScreen from "./screens/HomeScreen";
import Header from "./Header";
import {Footer} from "./Footer";
import LoginScreen from "./screens/LoginScreen";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import {useEffect} from "react";
import {auth} from "./firebase";
import SignupScreen from "./screens/signupScreen";
import MenuScreen from "./screens/MenuScreen";
import FeaturedScreen from "./screens/FeaturedScreen";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email, uid: userAuth.uid, displayName: userAuth.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })

    return () => {

    };
  }, [dispatch]);

  return (<div className="App">
    <Router>
      <Routes>
        {user ? <Route element={<Navigate to='/menu'/>}/> : <>
          <Route
            path='/account/sign-in'
            element={<LoginScreen/>}
          />
          <Route
            path='/account/signup'
            element={<SignupScreen/>}
          />
        </>}
        <Route path="/" element={<>
          <Header/>
          <HomeScreen/>
          <Fade>
            <Footer/>
          </Fade>
        </>}/>
        {!user ? (<Route element={<Navigate to='//account/sign-in'/>}/>) : (<Route
            path='/menu'
            element={(<>
              <Header menuPage='menuPage'/>
              <MenuScreen/>
            </>)}/>)}

        <Route
          path='/menu/featured'
          element={<>
            <Header/>
            <FeaturedScreen/>
            <Fade>
              <Footer/>
            </Fade>
          </>}
        />
      </Routes>
    </Router>
  </div>);
}

export default App;
