import { Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react';

function Login() {

    const [input, setInput] = useState({
    username: '',
    password: '',
    // confirmPassword: ''
    });

    const [error, setError] = useState({
    username: '',
    password: '',
    // confirmPassword: ''
    })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
 
  return (
    <div className="Login">
      <h4>LogIn </h4>
      
 
        <Input
          type="text"
          name="username"
          placeholder='Enter Username'
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}></Input>
        {error.username && <span className='err'>{error.username}</span>}
 
        <Input
        type="password"
        name="password"
        placeholder='Enter Password'
        value={input.password}
        onChange={onInputChange}
        onBlur={validateInput}></Input>
        {error.password && <span className='err'>{error.password}</span>}
 
        {/* <Input */}
          {/* type="password" */}
          {/* name="confirmPassword" */}
         {/* </div> placeholder='Enter Confirm Password' */}
          {/* value={input.confirmPassword} */}
          {/* onChange={onInputChange} */}
          {/* onBlur={validateInput}></Input> */}
        {/* {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}
 
        <Button>login</Button>
      
    </div>
  );
}
 
export default Login