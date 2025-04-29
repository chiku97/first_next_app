"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import './page.css'

function QuizForm() {
  const [quizForm, setQuizForm] = useState({
    name: "",
    questionNumber: 10,
    timeLimit: 15,
  });
 
  const handleChange= (e) =>{
    setQuizForm({ ...quizForm, [e.target.name]: e.target.value });
    console.log(quizForm)

  }

  return (
    <div className="quiz-form-container">
      <Link href="/" className="back-link">← Back to Subjects</Link>
      <div className="quiz-form-card">
        <h1 className="form-title">Configure Your Quiz</h1>
        <p className="form-subtitle">Set up your Problem Solving & Programming quiz parameters</p>

        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            value={quizForm.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="questions">Number of Questions</label>
          <div className="slider-container">
            <input
              type="range"
              id="questions"
              name="questionNumber"
              min="5"
              max="50"
              value={quizForm.questionNumber}
              onChange={handleChange}
            />
            <input
              type="number"
              name="questionNumber"
              value={quizForm.questionNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="timeLimit">⏱ Time Limit (minutes)</label>
          <div className="slider-container">
            <input
              type="range"
              id="timeLimit"
              min="5"
              max="120"
              name="timeLimit"
              value={quizForm.timeLimit}
              onChange={handleChange}
            />
            <input
              type="number"
              name="timeLimit"
              value={quizForm.timeLimit}
              onChange={handleChange}
            />
          </div>
        </div>

        <Link href={{
          pathname: '/question',
        }} className="start-button">Start Quiz</Link>
      </div>
    </div>
  );
}

export default QuizForm;