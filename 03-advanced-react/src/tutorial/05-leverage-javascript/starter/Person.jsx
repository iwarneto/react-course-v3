import React from 'react'
import { people } from '../../../data'

const Person = () => {
  return (
    <ul>
      {people.map((person) => {
        return <li key={person.id}><span>Name: {person.name}</span></li>
      })}
    </ul>
  )
}

export default Person