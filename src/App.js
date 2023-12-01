import React, { useState} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/nav/NavigationBar';
import SidePanel from './components/sideBar/SidePanel';
import MainSection from './components/mainSection/MainSection';
import Footer from './components/nav/Footer';
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";
// useCurrentLocation.js

function NavigationWrapper() {
    const location = useLocation();
    const showDropdown = location.pathname !== '/login' && location.pathname !== '/signup';

    return <NavigationBar showDropdown={showDropdown} />;
}

function App() {

    const [selectedSpot, setSelectedSpot] = useState(null);

    const handleSelectSpot = (spot) => {
        setSelectedSpot(spot);
    };

    const handlePaymentComplete = () => {
        setSelectedSpot(null); // Reset the selected spot after payment
    };

    return (
        <Router>
            <div className="App d-flex flex-column">
                <NavigationWrapper />
                <div className="flex-grow-1 d-flex">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <SidePanel selectedSpot={selectedSpot} onPaymentComplete={handlePaymentComplete} />
                                <MainSection onSelectSpot={setSelectedSpot} />
                            </>
                        } />
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
