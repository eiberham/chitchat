import React from 'react';
import './App.scss';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Side from './components/Side';

export default function(){
    return (
        <div className="container">
            <Header />
            <Side />
            <Login/>
            <Footer />
        </div>
    )
}