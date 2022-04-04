import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../UserSlice";

const UserList = () => {
  // const users = [
  //   { id: 1, name: "sachin", email: "sachin@gmail.com" },
  //   { id: 2, name: "sachin", email: "sachin@gmail.com" },
  // ];

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const renderCard = () =>
    users.map((user) => {
      return (
        <div style={{ background: "red", margin: "1em" }} key={uuidv4()}>
          <span>
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
          </span>
          <Link to={`editUser/${user.id}`}>
            <Button>Edit</Button>
          </Link>
          <Button onclick={() => handleRemoveUser(user.id)}>Delete</Button>
        </div>
      );
    });

  return (
    <>
      <Link to="addUser">
        <Button>Add User</Button>
      </Link>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.length ? renderCard() : <p>No User</p>}
      </div>
    </>
  );
};

export default UserList;
