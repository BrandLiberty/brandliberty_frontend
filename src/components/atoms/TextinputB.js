import React from 'react';
import "../assets/css/atoms/TextinputB.css"

const TextinputB = (props) => {
  return (
    <div>
       <label>{props.label}</label>

       <textarea
       value={props.value}
       onChange={(e) => {
         props.onChange(e.target.value);
       }}
       className={`form-control_text_input1 ${props.className}`}
       placeholder={props.placeholder}
     />
    </div>
  );
}

export default TextinputB;
