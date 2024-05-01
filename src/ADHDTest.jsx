import React, { useState, useEffect } from 'react';
import './App.css';
import ResultPage from './ResultPage';
import axios from "axios";

function ADHDTest() {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const [data, setData] = useState([]);
    const API_HOST="http://localhost:8081";
  
    const options = ['NOT AT ALL', 'SEVERAL DAYS', 'MORE THAN HALF THE DAYS', 'NEARLY EVERY DAY'];
  
    useEffect(() => {
      fetchQuestions();
    }, []);
  
    const fetchQuestions = async () => {
      try {
          const response = await axios.get( API_HOST + "/test/getQuestions/" + 1);
          setQuestions(response.data);
      } catch (error) {
          console.log("API Error:", error); // Log error message
      }
    };
  
    useEffect(() => {
      const allQuestionsAnswered = Object.keys(selectedOptions).length === questions.length;
      setAllQuestionsAnswered(allQuestionsAnswered);
    }, [selectedOptions, questions]);
  
    const handleOptionSelect = (questionId, option) => {
      setSelectedOptions(prevState => ({
        ...prevState,
        [questionId]: option
      }));
    };
  
    const handleSubmit = () => {
      if (Object.values(selectedOptions).includes(undefined)) {
        alert('Please answer all the questions before submitting the form.');
        return;
      }
  
      const obtainedScore = Object.values(selectedOptions).reduce((sum, option) => sum + { 'NOT AT ALL': 0, 'SEVERAL DAYS': 1, 'MORE THAN HALF THE DAYS': 2, 'NEARLY EVERY DAY': 3 }[option], 0);
      setScore(obtainedScore);
      setShowResults(true);
    };
  
    return (
      <div className="App">
        <div className="Content">
          {showResults ? (
            <ResultPage obtainedScore={score} totalScore={questions.length * 3} text={"ADHD"}/>
          ) : (
            <>
              <h1 className="TestHeading">ADHD Test</h1>
              <hr className="Separator" />
              <h3 className="Heading">Over the last 2 weeks, how often have you been bothered by any of the following problems?</h3>
              <div className="Contain">
                {questions.map((question, index) => (
                  <div className="Question" key={question.id}>
                    <label>{index + 1}. {question.question}</label>
                    <div className="Options">
                      {options.map((option, idx) => (
                        <button
                          key={idx}
                          className={selectedOptions[question.id] === option ? 'selected' : ''}
                          onClick={() => handleOptionSelect(question.id, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="SubmitButton">
                  <button onClick={handleSubmit} disabled={!allQuestionsAnswered}>Submit</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
}

export default ADHDTest;