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

function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/depression-test">Depression Test</Link>
      <Link to="/anxiety-test">Anxiety Test</Link>
      <Link to="/adhd-test">ADHD Test</Link>
    </nav>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="AppContainer">
        <h1>InnerBalance</h1>
        <h3>Take the first steps to mental health! </h3>
        <p>Information, resources, and free & confidential mental health screening.</p>
      </div>
      <div className="HomePageButtons">
        <h2>Take a Mental Health Test</h2>
        <p className='para'>Below are links to various mental health assessments. Take these tests to gain insights into your mental well-being and receive your personalized mental health scores.</p>
        <Link to="/depression-test"><button>Depression Test</button></Link>
        <span style={{ margin: '0 15px' }}></span>
        <Link to="/anxiety-test"><button>Anxiety Test</button></Link>
        <span style={{ margin: '0 15px' }}></span>
        <Link to="/adhd-test"><button>ADHD Test</button></Link>
      </div>
      
      <div className='contain'>
        <h2>About InnerBalance</h2>
        <p className='side'>InnerBalance, your guide to mental wellness. Our platform offers a range of resources and tools to help you navigate your journey towards inner peace and emotional well-being. Whether you're looking to assess your mental health through our specialized tests, explore coping strategies, or access supportive content, we're here to support you every step of the way. Take the first steps towards a healthier mind and a happier life with InnerBalance.</p>
      </div>
    </div>
  );
}


function App() {
  const questionsData = questions;
  const anxietyquestionData = anxietyquestions;
  const adhdquestionData = questions;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/depression-test"
          element={<Layout><DepressionTest questionsData={questionsData} /></Layout>}
        />
        <Route
          path="/anxiety-test"
          element={<Layout><AnxietyTest questionsData={anxietyquestionData} /></Layout>}
        />
        <Route
          path="/adhd-test"
          element={<Layout><ADHDTest questionsData={adhdquestionData} /></Layout>}
        />
      </Routes>
    </Router>
  );
}

export default App;