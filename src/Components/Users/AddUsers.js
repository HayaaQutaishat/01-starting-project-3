import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" min="1" onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
export default AddUsers;
