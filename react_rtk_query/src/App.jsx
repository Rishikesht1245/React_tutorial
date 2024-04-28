import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<AddUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
