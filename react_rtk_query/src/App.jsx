import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
