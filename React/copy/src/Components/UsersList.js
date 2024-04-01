import React from 'react'
import { useParams } from 'react-router-dom';

function UsersList() {
    
 const sampleData = [
        { id: 1, name: 'John Doe', age: 25, location: 'City1', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, location: 'City2', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', age: 22, location: 'City3', email: 'bob@example.com' },
      ];
  const{id}  = useParams()
if(!id)
  return (
    <div>
      <h1>Student Information</h1>
      {sampleData.map(user=> (
        <div key={user.id}>
        <h3>{user.name}</h3>
        <p> ID:{user.id}</p>
        <p>Age:{user.age}</p>
        <p>location:{user.location}</p>
        <p>Email:{user.email}</p>
        </div>
  ))}
    </div>
  )
const selectUser = sampleData.find(user=>user.id===parseInt(id,10))

return(
    <div>
    {selectUser ? (
        <div>
        <h2>User Details By Id</h2>
        <h3>{selectUser.name}</h3>
        <p> ID:{selectUser.id}</p>
        <p>Age:{selectUser.age}</p>
        <p>location:{selectUser.location}</p>
        <p>Email:{selectUser.email}</p>
        </div>
    ):(
        <p>User Not Found</p>
    )}
    </div>

)


}

export default UsersList
