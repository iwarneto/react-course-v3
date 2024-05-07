import { useReviewContext } from "../context/ReviewContextProvider";
import React from 'react'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({index, navigate}) => {
  const {review} = useReviewContext();
  const {name, job, image, text} = review[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h2 className="author">{name}</h2>
      <h3 className="job">{job}</h3>
      <p className="info">{text}</p>
      <nav className="btn-container">
        <div>
          <button type="button" className="prev-btn" onClick={() => {navigate('prev')}} disabled={index <= 0}>
            <MdOutlineNavigateBefore />
          </button>
          <button type="button" className="next-btn" onClick={() => {navigate('next')}} disabled={index >= (review.length - 1)}>
            <MdOutlineNavigateNext />
          </button>
        </div>
        <button type="button" className="btn" onClick={() => {navigate('random')}}>Surprise Me</button>
      </nav>
    </article>
  )
}

export default Review