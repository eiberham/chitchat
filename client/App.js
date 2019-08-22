import React, { lazy, Suspense }  from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import './App.scss';
const Login = lazy( () => import('./components/Login'));
const Header = lazy( () => import('./components/Header'));
const Footer  = lazy( () => import('./components/Footer'));
const Side = lazy( () => import('./components/Side'));
const Chat = lazy( () => import('./components/Chat'));
const Signup = lazy ( () => import('./components/Signup'));

import { ChitChatProvider } from "./context/ChitChatContext";

const renderLoader = () => <p>Loading</p>;

export default function(){
    return (
        <ChitChatProvider>
            <div className="poligon"></div>
            <div className="container">
                <Suspense fallback={renderLoader()}>
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
                </Suspense>
            </div>
        </ChitChatProvider>
    )
}