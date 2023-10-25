// App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "../src/Pages/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='movie/:id' element={<MovieDetail/>} />
                    <Route path='movies/:type' element={<MovieList/>} />
                    <Route path='/*' element={<h1>Error 404</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
