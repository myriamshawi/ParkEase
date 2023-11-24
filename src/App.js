import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SidePanel from './components/SidePanel';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App d-flex flex-column">
            <NavigationBar />
            <div className="flex-grow-1 d-flex">
                <SidePanel />
                <MainSection />
            </div>
            <Footer />
        </div>
    );
}

export default App;
