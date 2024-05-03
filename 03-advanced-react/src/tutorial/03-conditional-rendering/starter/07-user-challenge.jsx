import { useState, useEffect } from "react";

const UserChallenge = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const user = "Vegan Food Truck"

  function logInOut() {
    setIsLoggedIn(state => !state)
  }

  return (
    <div>
      {!isLoggedIn ? <h4>Please Login</h4> : <h4>Hello there, {user}!</h4>}
      {
      !isLoggedIn ?
      <button onClick={logInOut} className="btn">Login</button> :
      <button onClick={logInOut} className="btn">Logout</button>
      }
    </div>
  );
};

export default UserChallenge;
