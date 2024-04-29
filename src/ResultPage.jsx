import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const ResultsPage = ({ obtainedScore, totalScore, text }) => {
  const percentage = (obtainedScore / totalScore) * 100;

  let message = '';
  if (percentage <= 20) {
    message = 'Minimal ';
  } 
  else if(percentage <= 40) {
    message = 'Mild ';
  }

  else if(percentage <= 60) {
    message = 'Moderate '
  }

  else if(percentage <= 80) {
    message = 'Moderately Sever '
  }

  else {
    message = 'Sever '
  }

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendReport = () => {
    console.log("Email: ",email);
    console.log("API: ",import.meta.env.VITE_API_HOST );
    console.log("Stage: ", message);
    console.log("Obtained Score: ", obtainedScore);
    console.log("Total ", totalScore);
    console.log("name ", text)
    try {
         const json = {
            email: email,
            stage: message,
            obtainedScore: obtainedScore,
            totalScore: totalScore,
            name: text
         };
        
         const response = axios.post(
            import.meta.env.VITE_API_HOST + "/test/getEmail",
            json,
         );
     } catch (error) {
         console.log(error);
     }
    console.log(`Sending report to ${email}`);
  };

  return (
    <div>
      <h1>Results</h1>
      <div className="black-container">
       <div className="white-text">
        <h3>Your Result - {text} Test</h3>
        <h2>{message} {text}</h2>
        </div>
      </div>
      <h3>About Your Score: {obtainedScore}/{totalScore}</h3>
      {percentage > 60 && (
        <div className="warning-container">
          <h3>Your responses indicate that you may be at risk of harming yourself. Please seek help immediately.</h3>
        </div>
      )}
      <p>Based on your responses, you may have symptoms of {message} {text}. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.</p>
      <br/>
      <div className="email-container">
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address" style={{ width: '30%', padding: '10px', fontSize: '16px', borderRadius: '10px' }} />
        <button onClick={handleSendReport} style={{ width: '15%', padding: '10px', fontSize: '14px' }}>Send Report</button>
      </div>
    </div>
  );
};

export default ResultsPage;