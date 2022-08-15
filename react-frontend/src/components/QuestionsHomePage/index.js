
import React from 'react';
import { useState, useEffect } from "react"
import axios from "axios"
// import useAxios, { configure } from "axios-hooks"

const App = (props) => {

  // const url = "https://us-central1-digital-lit-richclarke0.cloudfunctions.net/api/questions"

  const [questions, setQuestions] = useState(null)

  // const instance = axios.create(
  //   {
  //     withCredentials : true,
  //     baseUrl : url,
  //   }
  // )
  // configure({
  //   instance
  // })
  // const [{data, loading, error}, refetch] = useAxios()
  // console.log("data", data)

  const getQuestions = async () => {
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

  useEffect(() => {
    console.log("useEffect")
    getQuestions()
  }, [])

  return (
    <div>
      <h1>Landing page</h1>
      <button onClick={() => { console.log(questions) }}>questions</button>
    </div>
  )

};
export default App;