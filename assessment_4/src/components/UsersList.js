import React from "react";

function UsersList(props) {
  return (
    <div className="users-list">
      <p style={{fontWeight:"bold"}}>Users</p>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
