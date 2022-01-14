import React, { useState } from "react";

function AddUser(props) {
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(addName, addAge);
    setAddName("");
    setAddAge("");
  };
  const nameChangeHandler = (event) => {
    setAddName(event.target.value);
  };
  const ageChangehandler = (event) => {
    setAddAge(event.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={addUserHandler}>
        <label>Name: </label>
        <input
          type="text"
          value={addName}
          onChange={nameChangeHandler}
          required
        />
        <br />
        <label>Age: </label>
        <input
          type="number"
          min="1"
          value={addAge}
          onChange={ageChangehandler}
          required
        />
        <br />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
