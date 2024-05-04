import {useReducer} from 'react';
import { data } from '../../../data';

function reducer (state, action) {
  switch (action.type) {
    case 'CLEAR_ITEMS':
      return [];
    case 'RESET':
      return [...data];
    case 'REMOVE_ITEM':
      return [...state].filter(person => person.id !== action.payload);
  return state;
}}


const ReducerBasics = () => {
  const [people, dispatch] = useReducer(reducer, data);

  //IMPLEMENTAR USE REDUCER NESSE CÓDIGO COM AS AÇÕES.

  const clearButton = people.length !== 0 ?
    <button
      className='btn'
      style={{ marginTop: '2rem' }}
      onClick={() => dispatch({type: 'CLEAR_ITEMS'})}
    >
      clear items
    </button> :
    <button
    className='btn'
    style={{ marginTop: '2rem' }}
    onClick={() => dispatch({type: 'RESET'})}
    >
    Reset
    </button>

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  };

  //JSX DO COMPONENTE --------------------------------
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {clearButton}
    </div>
  );
};

export default ReducerBasics;
