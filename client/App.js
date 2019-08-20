import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import './App.scss';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Side from './components/Side';
import Chat from './components/Chat';
import Signup from "./components/Signup";

import { ChitChatProvider } from "./context/ChitChatContext";


export default function(){
    return (
        <ChitChatProvider>
            <div className="poligon"></div>
            <div className="container">
                <Header />
                <Side />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={ Login } />
                        <Route exact path="/signup" component={ Signup } />
                        <Route path="/chat" exact component={ Chat } />
                    </Switch>
                </Router>
                <Footer />
            </div>
        </ChitChatProvider>
    )
}