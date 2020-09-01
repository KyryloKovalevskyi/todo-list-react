import React from 'react';

const Alert = ({ text }) => {
  return (
    <div className='alert'>
      <i className='fas fa-exclamation-circle'></i>
      {text}
    </div>
  );
};

export default Alert;
