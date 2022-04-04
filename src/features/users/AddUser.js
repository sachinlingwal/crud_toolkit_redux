import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "../UserSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const { name, email } = values;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  console.log(values);
  const handleAddUser = () => {
    if (name || email) {
      dispatch(addUser({ ...values, id: uuidv4() }));
      navigate("/");
    } else {
      alert("please fill all fields");
    }
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
      <Button onclick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
