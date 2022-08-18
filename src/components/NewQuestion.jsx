import axios from "axios"
import { useState } from "react"
import { MDBInput, MDBBtn, MDBContainer } from "mdb-react-ui-kit"
import {useNavigate} from "react-router-dom"


export default function New() {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        pool: "easy",
        question: "",
        img: "",
        correctAnswer: "a",
        answerChoicesA: "",
        answerChoicesB: "",
        answerChoicesC: "",
        answerChoicesD: ""
    })

    const handleChange = (event) => {
        console.log(newForm)
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        newQuestion()
        navigate("/")
    }

    const newQuestion = () => {
        let options = {
            url: 'https://us-central1-digital-lit-richclarke0.cloudfunctions.net/api/question/',
            method: 'post',
            data: newForm
        };
        axios(options)
        .then((response) => {
            console.log("response", response)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <MDBContainer style={{ "maxWidth": "700px" }}>
            <form className='mb-5' onSubmit={handleSubmit}>
                <span>
                    <label for="difficulty">Question Difficulty: </label>
                    <select id="difficulty" style={{"margin":"1em"}} onChange={ handleChange } name="pool" label="Difficulty:">
                        <option selected value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </span>
                
                <MDBInput wrapperClass='mb-4' name='question' label='Question:' type='text' value={newForm.question} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='img' label='Image URL (optional):' type='text' value={newForm.img} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesA' label='Answer Choice A:' type='text' value={newForm.answerChoicesA} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesB' label='Answer Choice B:' type='text' value={newForm.answerChoicesB} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesC' label='Answer Choice C:' type='text' value={newForm.answerChoicesC} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesD' label='Answer Choice D:' type='text' value={newForm.answerChoicesD} onChange={ handleChange }/>
                <label for="correct">Select the correct answer:</label>
                <select id="correct" style={{"margin":"1em"}} onChange={ handleChange } name="correctAnswer" label="Correct Answer:">
                    <option selected value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </select>
                <br></br>
                <MDBBtn className="mb-6" type="submit">Submit New Question</MDBBtn>
                {/* <MDBBtn className="mb-6" onClick={removeQuestion}>DELETE Question</MDBBtn> */}
            </form>
        </MDBContainer>
    )
}