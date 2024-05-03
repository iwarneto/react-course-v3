import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [users, setUsers] = useState([...data])
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = users.reduce((acc, currValue) => {
      return (acc.id > currValue.id) ? acc.id : currValue.id;
    }, 0) + 1;

    // users.push({id, name})
    setUsers(prevUsers => ([...prevUsers, {id, name}]))
    setName("");
  }

  const handleClick = (id) => {
    setUsers(prevUsers => {
      let updatedUsers = [...prevUsers];

      updatedUsers = updatedUsers.filter((person) => (person.id !== id))
      return updatedUsers
    })
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map((person) => {
        return <User key={person.id} user={person} deleteUser={handleClick}/>
      })}
    </div>
  );
};

export default UserChallenge;

export const User = ({user, deleteUser}) => {
  const {id, name} = user;

  return (
    <div style={{marginBottom: "2rem"}}>
      <h4>{id}</h4>
      <h5>{name}</h5>
      <button className="btn" onClick={() => {deleteUser(id)}}>Remove</button>
    </div>
  )
}

