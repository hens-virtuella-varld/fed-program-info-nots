import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'Are you Nordic student?',
      type: 'radio',
      options: ['Yes', 'No'],
      answer: 'Yes',
      todo: 'You need to pay the tuition fee.',
    },
    {
      question:
        'Do you have at least a high school diploma ("Gymnasieexamen") or a foreign equivalent?',
      type: 'radio',
      options: ['Yes', 'No'],
      answer: 'Yes',
      todo: 'You need to get a high school diploma ("Gymnasieexamen") or a foreign equivalent.',
    },
    {
      question:
        'Do you have the Swedish high school courses "Math 2" and "Programming 1" or foreign equivalent knowledge gained from high school, higher education, or through previouspractical experience?',
      type: 'radio',
      options: ['Yes', 'No'],
      answer: 'Yes',
      todo: 'Yoy need to get the equivalent knowledge of the Swedish high school courses "Math 2" and "Programming 1".',
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
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Quiz Complete!</h2>
          <h3>Your Score: {score}</h3>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          {
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type='radio'
                    name={`question${currentQuestion}`}
                    value={option}
                    onChange={() =>
                      handleAnswerSelection(currentQuestion, option)
                    }
                  />
                  {option}
                </li>
              ))}
            </ul>
          }
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
