import React from 'react';
import '../assets/css/atoms/Button.css';

const ButtonA = (props) => {
  return (
    <div className="form-group py-3 hlB">
      <button className={`btn btn-primary shadow w-100 verifyBtn ${props.className}`}>
        {props.name}
      </button>
    </div>
  );
}

export default ButtonA;
