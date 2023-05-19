import './App.css';
import Navbar from "./layout/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/edit-user/:id" element={<EditUser/>}/>
                <Route path="/view-user/:id" element={<ViewUser/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
