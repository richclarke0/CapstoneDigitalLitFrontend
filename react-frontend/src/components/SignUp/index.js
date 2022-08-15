import axios from "axios"
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"

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

  // const handleChange = (event) => {
  //   setLoginState((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }))
  // }

  const navigate = useNavigate()

};
export default App;