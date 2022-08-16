import { Link } from "react-router-dom"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MDBInput, MDBBtn, MDBContainer } from "mdb-react-ui-kit"

export default function EditQuestionForm(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const questions = props.questions
    const question = questions.find((p) => p.questionId === id)

    const [editForm, setEditForm] = useState({
        pool: question.pool,
        question: question.question,
        img: question.img,
        correctAnswer: question.correctAnswer,
        answerChoicesA: question["answerChoices"]["a"],
        answerChoicesB: question["answerChoices"]["b"],
        answerChoicesC: question["answerChoices"]["c"],
        answerChoicesD: question["answerChoices"]["d"],
    })

    console.log(editForm)
    const handleChange = (event) => {
        console.log(event.target.name)
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // props.updateQuestion(editForm, question.questionId)
        navigate("/", { replace: true })
    }

    const removeQuestion = () => {
        // props.deleteQuestion(question.questionId);
        navigate("/")
    };

    return (
        <MDBContainer style={{ "maxWidth": "700px" }}>
            <form className='mb-5' onSubmit={handleSubmit}>
                <span>
                    <label for="difficulty">Question Difficulty: </label>
                    <select id="difficulty" style={{"margin":"1em"}} onChange={ handleChange } name="pool" label="Difficulty:">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </span>
                
                <MDBInput wrapperClass='mb-4' name='question' label='Question:' type='text' value={editForm.question} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='img' label='Image (optional):' type='text' value={editForm.img} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesA' label='Answer Choice A:' type='text' value={editForm.answerChoicesA} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesB' label='Answer Choice B:' type='text' value={editForm.answerChoicesB} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesC' label='Answer Choice C:' type='text' value={editForm.answerChoicesC} onChange={ handleChange }/>
                <MDBInput wrapperClass='mb-4' name='answerChoicesD' label='Answer Choice D:' type='text' value={editForm.answerChoicesD} onChange={ handleChange }/>
                <label for="correct">Select the correct answer:</label>
                <select id="correct" style={{"margin":"1em"}} onChange={ handleChange } name="correctAnswer" label="Correct Answer:">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </select>
                <br></br>
                <MDBBtn className="mb-6" type="submit">Submit Edits</MDBBtn>
                <MDBBtn className="mb-6" onClick={removeQuestion}>DELETE Question</MDBBtn>
            </form>
        </MDBContainer>
    )
}