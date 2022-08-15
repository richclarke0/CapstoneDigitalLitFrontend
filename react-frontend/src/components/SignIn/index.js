import { useEffect, useState } from "react"
import React from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {Button} from "react-foundation"

const App = (props) => {

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  })

  const [errorState, setErrorState] = useState(null)

  const handleChange = (event) => {
    setLoginState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
  }))
  }
  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('/login', loginState, )
			.then((response) => {
        console.log("res/token", response.data)
				localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);

        navigate('/')
			})
			.catch((error) => {				
				setErrorState({
					errors: error.response.data,
					loading: false
				});
			});
	};


  const {email,password} = loginState;

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleChange}/><br />
        <input type="password" name="password" value={password} onChange={handleChange}/><br />
        <Button type="submit" value="submit">Submit</Button>
      </form>
    </div>
  )
}

export default App;
