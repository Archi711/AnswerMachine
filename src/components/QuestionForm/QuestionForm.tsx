import * as React from 'react';
import './QuestionForm.css';

export const QuestionForm = () => {
  return (
    <form className="QFcontainer">
      <label htmlFor="question" className="QFcontainer__label">Your question:</label>
      <input
        id="question"
        className="QFcontainer__input"
        type="text"
      />
      <button
        className="QFcontainer__button QFcontainer__button--questionMark">
        ?
      </button>
      <button
        className="QFcontainer__button QFcontainer__button--submit">
        ASK!
      </button>
    </form>
  )
}