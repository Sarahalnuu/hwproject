import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function HookSet () {
//    const [counter, setCounter] = useState(0)
// const [todo, setTodo] = useState("")
// const [list, setList] = useState([])
//    const increment = () => {
    // console.log("setCounter");
    // setCounter(counter + 1)
//    }
// const todoList = () => {
    // setList([...list, todo])
// }
// return (
    // <div>
        // <p>input</p>
        // <Input htmlSize={8} width='20%' onChange={(e) => { setTodo(e.target.value) }}></Input>
        // <p>email</p>
        // <Input htmlSize={8} width='20%' onChange={(e) => { setTodo(e.target.value) }}></Input>
        // <Button onClick={todoList}>Add Task</Button>
        // <p>{list.map(items =>
            // <ul>
                // <li>{items}</li>
            // </ul>
            // )}</p>
        {/* <Button onClick={increment}>Click me</Button> */}
        {/* <p>counter : {counter}</p> */}
        // </div>
// )
// }

const [input, setInput] = useState({
    username: '',
     password: '',
     confirmPassword: ''
 });

     const [error, setError] = useState({
     username: '',
     password: '',
     confirmPassword: ''
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
       <h4>LogIn</h4>
      
 
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
export default HookSet