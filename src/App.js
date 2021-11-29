import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Nav, Footer } from './components'
import { Login, Register, Success, Verification } from './pages'

function App() {
  return (
    <div className="App">
        <Nav />
        <div className="px-10 py-8 min-h-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="success" element={<Success />} />
            <Route path="verification" element={<Verification />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
