import React from 'react';
import './MenuItem.css'
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router-dom";

function MenuItem({type, image}) {
  return (
    <Fade>
      <Link to='/menu' className='menuItem'>
        <img src={image} alt={type} className='menuItem__image'/>
        <h4 className='menuItem__type'>{type}</h4>
      </Link>
    </Fade>
  );
}

export default MenuItem;