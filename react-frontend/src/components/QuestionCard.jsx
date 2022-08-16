import React, { useState } from 'react';
import { Link } from "react-router-dom"

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCardHeader
} from 'mdb-react-ui-kit';

export default function Card(props) {
    let question = props.question
    let capitalize = props.capitalize

    const [answerCheck, setAnswerCheck] = useState("")

    function selectChange(event) {
        if (event.target.value == question.correctAnswer) {
            setAnswerCheck("lightgreen")
            console.log("correct")
        }
    }

    function mapAnswers() {
        return Object.entries(question.answerChoices).map(([k, v]) => (
            <option value={k}>{v}</option>
        ))
    }

    function conditionalRenderImg() {
        if (!!question.img) {
            return <>
                <div className="col-md-2">
                    <MDBCardImage src='question.img' position='left' alt='...' className="img-thumbnail" />
                </div>
                <br />
            </>
        }
    }

    return (
        <MDBCard>
            <MDBCardBody >
                <MDBCardHeader style={{ "padding": "2px" }}>Question Difficulty: {question.pool ? capitalize(question.pool) : "Unknown"}</MDBCardHeader>
                {conditionalRenderImg()}
                <MDBCardTitle>{question.question}</MDBCardTitle>
                <MDBCardText>
                    <select onChange={selectChange} style={{ "backgroundColor": answerCheck }}>{mapAnswers()}</select>
                </MDBCardText>
                <MDBBtn >Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}