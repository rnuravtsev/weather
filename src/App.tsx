import React from 'react';
import './App.css';
import Header from "./blocks/Header/Header";
import Footer from "./blocks/Footer/Footer";
import CityContainer from "./blocks/City/CityContainer";

function App() {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>
            <main className="app__main">
                <CityContainer/>
            </main>
            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
