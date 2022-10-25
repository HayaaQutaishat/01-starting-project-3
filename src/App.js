import React, { useState, Fragment } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";

const USERS_LIST = [];

function App() {
  const [list, setList] = useState(USERS_LIST);
  const addUserListHandler = (newUser) => {
    setList((prevList) => {
      return [newUser, ...prevList];
    });
  };
  // console.log(list);
  return (
    <Fragment>
      <AddUsers onAddUserList={addUserListHandler} />
      <UsersList list={list} />
    </Fragment>
  );
}

export default App;
