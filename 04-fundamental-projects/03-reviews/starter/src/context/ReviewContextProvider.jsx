import {createContext, useContext, useState} from 'react'
import reviews from '../data'

const ReviewContext = createContext({
  id: null,
  name: null,
  job: null,
  image: null,
  text: null,
})


//Custom hook para exportar o contexto da review
export const useReviewContext = () => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error("No context available");
  }

  return context;
}

const ReviewsContextProvider = ({children}) => {
  const [review, setReview] = useState([...reviews]);

  return (
    <ReviewContext.Provider value={{review, setReview}}>
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewsContextProvider