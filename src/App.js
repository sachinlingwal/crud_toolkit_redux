import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";

function App() {
  return (
    <>
      <h1> Curd operation using react toolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
