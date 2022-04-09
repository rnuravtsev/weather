import React from 'react';
import './App.css';
import Header from "./blocks/header/Header";
import Footer from "./blocks/footer/Footer";
import Main from "./blocks/main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
