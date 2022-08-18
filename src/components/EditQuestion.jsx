import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MDBInput, MDBBtn, MDBContainer } from "mdb-react-ui-kit"
import axios from "axios"

export default function EditQuestionForm(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const questions = props.questions
    const question = questions.find((p) => p.questionId === id)
    console.log("question after set", question.questionId)
    const [updateDeleteAnnouncer, setUpdateDeleteAnnouncer] = useState("")
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

    const handleChange = (event) => {
        console.log(event.target.name)
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        updateQuestion()
        navigate(`/question/edit/${question.questionId}`, { replace: true })
    }

    const removeQuestion = (event) => {
        event.preventDefault()
        axios
            .delete(`https://us-central1-digital-lit-richclarke0.cloudfunctions.net/api/question/${question.questionId}`)
            .then((res) => {
                console.log("del response", res)
                res ? setUpdateDeleteAnnouncer("Question Deleted!") : setUpdateDeleteAnnouncer("Error")
                // window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
            
            setTimeout(() => { navigate("/", {replace: true}) }, 2000)
    };

    const updateQuestion = () => {
        let options = {
            url: `https://us-central1-digital-lit-richclarke0.cloudfunctions.net/api/question/${question.questionId}`,
            method: 'put',
            data: editForm
        }
        axios(options)
            .then((response) => {
                console.log("res",response)
                setUpdateDeleteAnnouncer("Question Updated!")
                setTimeout(function () {
                    setUpdateDeleteAnnouncer("")
                }, 4000)

            })
            .catch((error) => {
                // this.setState({ open: true, errors: error.response.data });
                console.log(error);
            });
    }

    // useEffect(() => {
    //     console.log("useEffect in edit page")
    //     props.getQuestions()
    //   }, [])

    return (
        <MDBContainer style={{ "maxWidth": "700px" }}>
            <form className='mb-5' onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="difficulty">Question Difficulty: </label>
                    <select id="difficulty" style={{ "margin": "1em" }} onChange={handleChange} name="pool" label="Difficulty:">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </span>

                <MDBInput wrapperClass='mb-4' name='question' label='Question:' type='text' value={editForm.question} onChange={handleChange} />
                <MDBInput wrapperClass='mb-4' name='img' label='Image (optional):' type='text' value={editForm.img} onChange={handleChange} />
                <MDBInput wrapperClass='mb-4' name='answerChoicesA' label='Answer Choice A:' type='text' value={editForm.answerChoicesA} onChange={handleChange} />
                <MDBInput wrapperClass='mb-4' name='answerChoicesB' label='Answer Choice B:' type='text' value={editForm.answerChoicesB} onChange={handleChange} />
                <MDBInput wrapperClass='mb-4' name='answerChoicesC' label='Answer Choice C:' type='text' value={editForm.answerChoicesC} onChange={handleChange} />
                <MDBInput wrapperClass='mb-4' name='answerChoicesD' label='Answer Choice D:' type='text' value={editForm.answerChoicesD} onChange={handleChange} />
                <h4>{updateDeleteAnnouncer}</h4>
                <label htmlFor="correct">Select the correct answer:</label>
                <select id="correct" style={{ "margin": "1em" }} onChange={handleChange} name="correctAnswer" label="Correct Answer:">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </select>
                <br></br>
                <MDBBtn className="mb-6" type="submit">Update Question</MDBBtn>
                <MDBBtn className="mb-6" onClick={removeQuestion}>DELETE Question</MDBBtn>
            </form>
        </MDBContainer>
    )
}