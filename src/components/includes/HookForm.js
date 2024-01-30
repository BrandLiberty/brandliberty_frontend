import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/includes/hookform.css";



export default function ReactHookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
 
  const onSubmit = (data) => {
    setData(JSON.stringify(data));
  };



  return (
    <div className="react-hook-form-container">
      <div className="background form-wrapper">
        {/* <h2 className="title">
          React Hook Form
        </h2> */}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`input ${errors.name && 'error'}`}
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            className={`input ${errors.email && 'error'}`}
            placeholder="Email"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          
          {/* Birth date field using react-datepicker */}
          <input
            className={`input ${errors.dateOfBirth && 'error'}`}
            type="date"
            {...register("dateOfBirth", { required: "Date of Birth is required" })}
          />
          {errors.dateOfBirth && <p className="error">{errors.dateOfBirth.message}</p>}


          <input
            className={`input ${errors.username && 'error'}`}
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}

          <input
            className={`input ${errors.password && 'error'}`}
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 4, message: "Password must be at least 4 characters" },
            maxLength: { value: 10, message: "Password not be greter than 10 characters" } })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button
            className="button"
            type="submit"
          >
            <span>
              Submit
            </span>
          </button>
        </form>
        <br/>
        <div className="data-display">
          <p> Data: {data}</p>
        </div>
      </div>
    </div>
  );
}
