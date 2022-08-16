import React from 'react';
import { useState, useEffect } from "react"
import QuestionCard from "./QuestionCard"
import { MDBContainer } from 'mdb-react-ui-kit';


const App = (props) => {
  // const questions = props.questions
  // const getQuestions = props.getQuestions

  useEffect(() => {
    console.log("useEffect in home")
    props.getQuestions()
  }, [])

  return (
    <div>
      <h1>All Questions</h1>
      <button onClick={() => { console.log(props.questions[0]) }}>questions</button>
      
      <MDBContainer>
        <QuestionCard question={props.questions[0]}></QuestionCard>   
      </MDBContainer>
    </div>

    
  )

};
export default App;