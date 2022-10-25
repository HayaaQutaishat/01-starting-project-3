import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserage = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUserage < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(> 0)",
      });
      return;
    }
    // console.log(enteredName, enteredAge);
    const newUser = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: +enteredUserage,
    };
    props.onAddUserList(newUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUsers;
