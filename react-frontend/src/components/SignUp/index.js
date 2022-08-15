import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "react-foundation"
import * as ROUTES from '../../constants/routes'



import React from 'react';
const App = (props) => {
  const [signupState, setSignupState] = useState(
    {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      country: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  )

  const handleChange = (event) => {
    setSignupState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    setSignupState((prevState) => ({
      ...prevState,
      loading: true,
    }))

    axios
    .post('/signup', signupState)
    .then((response) => {
      localStorage.setItem('AuthToken', response.data.token)
      setSignupState((prevState) => ({
        ...prevState,
        loading: false,
      }))
      navigate('/')
    })
    .catch((error) => {
      setSignupState((prevState) => ({
        ...prevState,
        errors: error.response.data,
        loading: false,
      }))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="firstName"
      label="First Name"
      placeholder="First Name"
      name="firstName"
      type="text"
      onChange={handleChange}/>
      <input id="lastName"
      label="Last Name"
      placeholder="Last Name"
      name="lastName"
      type="text"
      onChange={handleChange}/>
      <input id="email"
      label="Email Address"
      placeholder="Email Address"
      name="email"
      type="email"
      onChange={handleChange} />
      <input id="username"
      label="Username"
      placeholder="Username"
      name="username"
      type="text"
      onChange={handleChange} />
      <input id="phoneNumber"
      label="Phone Number"
      placeholder="Phone Number"
      name="phoneNumber"
      type="text"
      onChange={handleChange} />
      <input id="country"
      label="Country"
      placeholder="Country"
      name="country"
      type="text"
      onChange={handleChange} />
      <input id="password"
      label="Password"
      placeholder="Password"
      name="password"
      type="password"
      onChange={handleChange} />
      <input id="confirmPassword"
      label="Confirm Password"
      placeholder="Confirm Password"
      name="confirmPassword"
      type="password"
      onChange={handleChange} />
      <Button type="submit" value="submit">Submit</Button>
      <p>Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link></p>
    </form>
  )

};
export default App;
