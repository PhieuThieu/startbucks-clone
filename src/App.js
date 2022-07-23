import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Fade} from 'react-awesome-reveal'
import HomeScreen from "./screens/HomeScreen";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <HomeScreen/>
              <Fade>
                <Footer/>
              </Fade>
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
