import React from 'react';
import "../assets/css/atoms/TextinputA.css"
const TextinputA = (props) => {
  return (
    <div>
       <label>{props.label}</label>

      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        className={`form-control_text_input  ${props.className}`}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextinputA;
