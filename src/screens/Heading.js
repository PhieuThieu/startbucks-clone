import React from 'react';
import './Heading.css'

function Heading(props) {
  return (
    <div className='heading'>
      {props.heading}
    </div>
  );
}

export default Heading;