import * as React from 'react';
import './QuestionForm.css';

import { useFetch } from '../../hooks/useFetch';

export const QuestionForm = () => {
  const {data, loading, error, load} = useFetch("https:/yesno.wtf/api");
  const [loaderText, setLoaderText] = React.useState("Ask!");


  function handleSubmit (e : React.FormEvent){
    e.preventDefault();
    load().then((b : any) => console.log(b.answer));
  }

  React.useEffect(() =>  {
    console.log('fired')
    let text = loading ? "Loading..." : "Ask!";
    setLoaderText(text);
  },[loading])


  return (
    <form onSubmit={handleSubmit} className="QFcontainer">
      <label htmlFor="question" className="QFcontainer__label">Your question: </label>
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
          {loaderText}
      </button>
    </form>
  )
}