import * as React from 'react';

import './App.css';

import { QuestionForm } from './QuestionForm/QuestionForm';

export const App = () => {

  return (
    <section className="app-container">
      <h1 className="app-container__heading">
        Answering
        <span className="app-container__headingText--styled"> Machine</span>
      </h1>
      <QuestionForm />
    </section>
  )
}