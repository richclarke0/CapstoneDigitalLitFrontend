export default function New() {
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

    const updateQuestion = () => {
        let options = {
            url: `/question/${question.questionId}`,
            method: 'put',
            data: editForm
        }
        axios(options)
        .then(() => {
            //idk
        })
        .catch((error) => {
            // this.setState({ open: true, errors: error.response.data });
            console.log(error);
        });
    }
    
    return <h1>new question</h1>
}