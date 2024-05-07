import { IoIosArrowDown } from "react-icons/io";

const Question = ({id, questionTitle, questionInfo, showInfo, handleVisibility}) => {
  const accordionContentClass = "accordion-content" + (showInfo ? " open" : "")
  const buttonClass = "question-btn" + (showInfo ? " invert-arrow" : "")
  return (
    <div className='question' onClick={() => {handleVisibility(id)}}>
      <header>
        <h5>{questionTitle}</h5>
        <button type="button" className={buttonClass}><IoIosArrowDown /></button>
      </header>
      <p className={accordionContentClass}>{questionInfo}</p>
    </div>
  )
}

export default Question