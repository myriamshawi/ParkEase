import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Layout from "./components/layout";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        </Layout>
    );
}

export default App;
