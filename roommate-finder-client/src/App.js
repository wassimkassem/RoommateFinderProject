import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Matches from './components/Matches';
import Home from './components/Home';

const App = () => (
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

export default App;
