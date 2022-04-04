import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "../UserSlice";

const EditUser = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  const existingUser = users.filter((user) => user.id === param.id);

  const [values, setValues] = useState({
    name: existingUser ? existingUser[0].name : "",
    email: existingUser ? existingUser[0].email : "",
  });
  const { name, email } = values;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleEditUser = () => {
    dispatch(editUser({ ...values, id: param.id }));
    navigate("/");
  };
  return (
    <div>
      <TextField
        label="Name"
        value={name}
        inputProps={{
          type: "text",
          placeholder: "sachin lingwal",
          name: "name",
        }}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="Email"
        value={email}
        inputProps={{
          type: "text",
          placeholder: "sachin@gmail.com",
          name: "email",
        }}
        onChange={handleChange}
      />
      <Button onclick={handleEditUser}>Submit</Button>
    </div>
  );
};

export default EditUser;
