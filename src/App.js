import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Layout from "./components/layout";

function App() {
    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </Layout>
    );
}

export default App;
