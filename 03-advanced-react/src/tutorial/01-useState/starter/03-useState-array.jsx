import { useState } from "react";
import { data } from '../../../data'


const UseStateArray = () => {
  const [names, setNames] = useState([...data]);

  function deleteName(id) {
    setNames(prevArray => (prevArray.filter((name) => (name.id !== id))))
  }

  return (
    <>
      <ul className="users">
        {names.map((person) => {
          return (
            <li key={person.id}>
              <h2>{person.name}</h2>
              <button type="button" onClick={() => { deleteName(person.id) }}>Remove</button>
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={() => {setNames([])}}>Clear all</button>
    </>
  );
};

export default UseStateArray;
