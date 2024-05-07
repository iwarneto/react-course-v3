import { useState } from "react";
import Review from "./components/Review";
import { useReviewContext } from "./context/ReviewContextProvider";

const App = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const {review} = useReviewContext();

  const handleNavigate = (direction) => {
    const length = review.length

    if (direction === 'next') {
      if (reviewIndex >= length - 1) {
        return undefined;
      } else {
        setReviewIndex(prevIndex => prevIndex + 1)
      }
    }

    if (direction === 'prev') {
      if (reviewIndex <= 0) {
        return undefined
      } else {
        setReviewIndex(prevIndex => prevIndex - 1)
      }
    }

    if (direction === 'random') {
      setReviewIndex(Math.floor(Math.random() * length))
    }
  }

  return (
    <main>
      <Review index={reviewIndex} navigate={handleNavigate}/>
    </main>
  );
};
export default App;
