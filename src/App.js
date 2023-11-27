import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/nav/NavigationBar';
import SidePanel from './components/sideBar/SidePanel';
import MainSection from './components/mainSection/MainSection';
import Footer from './components/nav/Footer';
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {
    return (
        <Router>
            <div className="App d-flex flex-column">
                <NavigationBar />
                <div className="flex-grow-1 d-flex">
                    <Routes>
                        <Route path="/" element={<><SidePanel /><MainSection /></>} />
                        <Route path="/login" element={<Login />} />
                        <Route path= "/signup" element ={<SignUp />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
