import React from 'react';
import { useState, useEffect } from "react"
import QuestionCard from "./QuestionCard"
import { MDBContainer } from 'mdb-react-ui-kit';


const App = (props) => {
  const questions = props.questions
  // const getQuestions = props.getQuestions

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function renderQuestions() {
    if (props.pool == "all") {
      return (
        <div>
          <h1>All Questions</h1>
          {questions.map((entry, index) => {
            return (<QuestionCard key={index} question={entry} capitalize={capitalizeFirstLetter} />)
          })}
        </div>
      )
    } else {
          // console.log(entry.pool, props.pool, entry.pool === props.pool)
          return (
            <div >
              <h1>{capitalizeFirstLetter(props.pool)} Questions</h1>
              {questions.map((entry, index) => {
                if (entry.pool === props.pool) {
                  return (<QuestionCard key={index} question={entry} capitalize={capitalizeFirstLetter} />)
                }
              })}
            </div>
          )
    }
  }

  useEffect(() => {
    console.log("useEffect in home")
    props.getQuestions()
  }, [])

  const loaded = () => {
    return (
      <div>
        <button onClick={() => { console.log(props.questions) }}>console log all questions</button>

        <MDBContainer>
          {renderQuestions()}
          {/* <QuestionCard question={props.questions[0]}></QuestionCard> */}
        </MDBContainer>
      </div>
    )

  };

  const loading = () => {
    return <img
      style={{
        "position": "absolute",
        "left": "calc(50vw - 150px)",
        "top": "calc(50vh - 150px)",
        "width": "300px",
        "height": "300px"
      }}
      src="https://media4.giphy.com/media/tbF2NpLNX4HzG/giphy.gif" alt="" />
  }

  return questions ? loaded() : loading()
}
export default App;