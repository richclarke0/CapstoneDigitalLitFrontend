import { Link } from "react-router-dom"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditQuestionForm(props) {
    const { id } = useParams()
    const questions = props.questions
    const question = questions.find((p) => p._id === id)
    const navigate = useNavigate()

    const [editForm, setEditForm] = useState(question)

    const handleChange = (event) => {
        let newAnswerChoices = editForm.answerChoices

        // console.log(newForm)

        if (event.target.name.slice(0, 13) === "answerChoices") {
            let key = event.target.name.slice(13, 14)
            newAnswerChoices[key] = event.target.value
            setEditForm((prevState) => ({
                ...prevState,
                answerChoices: newAnswerChoices,
            }))
        } else {
            setEditForm((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            // props.updateQuestion(editForm, question._id)
            navigate("/", { replace: true })
        }

        const removeQuestion = () => {
            // props.deleteQuestion(question._id);
            navigate("/")
        };
    }
}