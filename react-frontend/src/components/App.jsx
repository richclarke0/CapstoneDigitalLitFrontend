import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from "./Navigation"
import QuestionsHome from './QuestionsHome';
import AboutPage from './About';
import { useState, useEffect } from "react"
import axios from "axios"

import * as ROUTES from '../constants/routes';

const App = () => {

  const [questions, setQuestions] = useState(null)

  const getQuestions = () => {
    axios
      .get("/questions", {
        responseType: "json",
      })
      .then((response) => {
        //have to store as a variable to useState
        let data = response.data
        setQuestions(data)
        // console.log("r", response)
        // console.log("d", response.data)
        // console.log("q", questions)
      })
  }

  return (
  <Router>
    <div>
      <Navigation />
      {/* <hr /> */}
      <Routes>
        <Route exact path={ROUTES.QUESTIONS_HOME} element={<QuestionsHome questions={questions} getQuestions={getQuestions} pool={"all"} />} />
        {/* easy , medium hard also go here */}
        <Route path={ROUTES.ABOUT} element={<AboutPage/>} />
      </Routes>
    </div>
  </Router>
)};

export default App;