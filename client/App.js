import React from 'react';
import './App.scss';
import Login from './components/Login';
import Header from './components/Header';

export default function(){
    return (
        <div className="container">
            <Header />
            <div>Advs</div>
            <div>
                <Login/>
            </div>
            <div>Advs</div>
            <div>Foot</div>
            <div>Foot</div>
            <div>Foot</div>
        </div>
    )
}