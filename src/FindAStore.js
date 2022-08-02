import React from 'react';
import './FindAStore.css'
import {Link} from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function FindAStore(props) {
  return (
    <Link to='/' className='findAStore'>
      <LocationOnIcon/>
      <h5>Find a store</h5>
    </Link>
  );
}

export default FindAStore;