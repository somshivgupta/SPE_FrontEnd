import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DepressionTest from './DepressionTest';
import AnxietyTest from './AnxietyTest';
import questions from './question.json';
import anxietyquestions from './anxeity-question.json';
import ADHDTest from './ADHDTest';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="Header">
      <div className="WebAppName" onClick={handleClick}>
        InnerBalance
      </div>
    </header>
  );
}
// Component for the navigation links
function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/depression-test">Depression Test</Link>
      <Link to="/anxiety-test">Anxiety Test</Link>
      <Link to="/adhd-test">ADHD Test</Link>
    </nav>
  );
}

function App() {
  const questionsData = questions; // Import JSON file containing questions and options
  const anxietyquestionData = anxietyquestions;
  const adhdquestionData = questions;

  return (
    <Router>
      <Header />
      <Navigation />
       <div className="AppContainer">
        <h1>InnerBalance</h1>
        <h3>Take the first steps to mental health! </h3>
        <p>Information, resources, and free & confidential mental health screening.</p>
      </div> 
      <Routes>
        <Route path="/depression-test" element={<DepressionTest questionsData={questionsData} />} />
        <Route path="/anxiety-test" element={<AnxietyTest questionsData={anxietyquestionData} />} />
        <Route path="/adhd-test" element={<ADHDTest questionsData={adhdquestionData} />} />
      </Routes>
    </Router>
  );
}

export default App;

