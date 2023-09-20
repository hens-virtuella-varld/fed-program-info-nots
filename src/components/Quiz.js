import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [todos, setTodos] = useState([]);

  const questions = [
    {
      question: 'Are you Nordic student?',
      type: 'radio',
      options: ['Yes', 'No'],
      answer: 'Yes',
      todo: 'Pay the tuition fee since you are not Nordic student.',
    },
    {
      question:
        'Do you have at least a high school diploma ("Gymnasieexamen") or a foreign equivalent?',
      type: 'radio',
      options: ['Yes', 'No'],
      answer: 'Yes',
      todo: 'Get a high school diploma ("Gymnasieexamen") or a foreign equivalent.',
    },
    {
      question:
        'Do you have the Swedish high school courses "Math 2" and "Programming 1" or foreign equivalent knowledge gained from high school, higher education, or through previouspractical experience?',
      type: 'radio',
      options: ['Yes', 'No'],
      answer: 'Yes',
      todo: 'Get the equivalent knowledge of the Swedish high school courses "Math 2" and "Programming 1".',
    },
    // Add more questions here
  ];
  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (
      answers[currentQuestion] === questions[currentQuestion].answer ||
      JSON.stringify(answers[currentQuestion]) ===
        JSON.stringify(questions[currentQuestion].answer)
    ) {
      setScore(score + 1);
    }
    if (
      answers[currentQuestion] !== questions[currentQuestion].answer ||
      JSON.stringify(answers[currentQuestion]) !==
        JSON.stringify(questions[currentQuestion].answer)
    ) {
      setTodos([...todos, questions[currentQuestion].todo]);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className='quiz'>
      <div >
        <div className='bg-img'>
          {showResult ? (
            <div>
              <h2>Quiz Complete!</h2>
              <h3>Your Score: {score}</h3>
              {todos.length === 0 ? (
                <h3>You can apply this education without problems!</h3>
              ) : (
                <div>
                  <h3>You need to do the following:</h3>
                  {
                    <ul>
                      {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                      ))}
                    </ul>
                  }
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2>Question {currentQuestion + 1}</h2>
              <h3>{questions[currentQuestion].question}</h3>
              {
                <ul>
                  {questions[currentQuestion].options.map((option, index) => (
                    <li key={`${currentQuestion}-${index}`}>
                      <input
                        type='radio'
                        name={`question-${currentQuestion}`}
                        value={option}
                        id={`question-${currentQuestion}-${option}`}
                        onChange={() =>
                          handleAnswerSelection(currentQuestion, option)
                        }
                      />
                      <label for={`question-${currentQuestion}-${option}`}>
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              }
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
