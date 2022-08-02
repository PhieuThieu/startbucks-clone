import React from 'react';
import './FormSubmit.css'

function FormSubmit({name, type, onClick}) {

  return (
    <button className='formSubmit' type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default FormSubmit;