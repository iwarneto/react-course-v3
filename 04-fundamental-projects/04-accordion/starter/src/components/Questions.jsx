import { useState } from "react"
import { useQuestionContext } from "../context/QuestionContextProvider"
import Question from "./Question";


const Questions = () => {
  const {questions} = useQuestionContext();
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const handleVisibility = (id) => {
    setActiveQuestionId(prevId => prevId === id ? null : id);
  }

  return (
    <div className="container">
      <h1>Questions</h1>
      {questions.map(question => {
        return (
          <Question
            key={question.id}
            id={question.id}
            questionTitle={question.title}
            questionInfo={question.info}
            showInfo={activeQuestionId === question.id}
            handleVisibility={handleVisibility}
          />
        )
      })}
    </div>
  )
}

export default Questions