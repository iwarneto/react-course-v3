import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        const result = await response.json();
        return result;
      })
      .then((data) => {
        setUsers([...data])
        console.log(data);
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <div className="user-container">
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <p><a href={html_url}>Profile</a></p>
                </div>
              </div>
            </li>
          )})}
      </ul>
    </>
      );
};
      export default FetchData;
