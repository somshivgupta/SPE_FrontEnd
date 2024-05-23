# Self Assessment Test App Frontend


## Overview

The Self Assessment Test App Frontend is a web application built using ReactJS. This application allows users to take self-assessment tests for Depression, Anxiety, and ADHD. Upon completing the tests, users receive a score and a report indicating the severity of their condition, which can be emailed to them.

## Features

1. Three Tests Available: Depression, Anxiety, and ADHD
2. Dynamic Questions: Questions are fetched from the backend using Axios
3. Score Computation: Scores are calculated based on user responses
4. Report Generation: Users receive a detailed report indicating their condition severity
5. Email Report: Users can enter their email to receive their report


## Condition Severity Levels

The condition severity is determined based on the percentage of the score. The thresholds for Depression are as follows:

Minimal Depression: 0-20%

Mild Depression: 21-40%

Moderate Depression: 41-60%

Moderately Severe Depression: 61-80%

Severe Depression: 81-100%


## Installation

To run the project locally, follow these steps:

### 1. Clone the repository:

```
git clone https://github.com/yourusername/self-assessment-test-app-frontend.git
cd self-assessment-test-app-frontend
```

### 2. Install the dependencies:

```
npm install
```

### 3. Start the development server:

```
npm run dev
```

The application will be available at http://localhost:5173.


## Usage

1. Select a Test: Choose either the Depression, Anxiety, or ADHD test.
2. Answer Questions: Complete the test by answering all the questions.
3. View Score and Report: After submitting the test, your score and condition severity will be displayed.
4. Email Report: Enter your email address to receive the report.


## Technology Stack
Frontend: ReactJS, HTML, CSS, Docker

HTTP Client: Axios for fetching questions from the backend
