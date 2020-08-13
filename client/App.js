import React, { lazy, Suspense }  from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useAuthed } from './hooks/useAuthed';
import history from './history';

import './App.scss';
const Login = lazy( () => import('./components/Login'));
const Header = lazy( () => import('./components/Header'));
const Footer  = lazy( () => import('./components/Footer'));
const Side = lazy( () => import('./components/Side'));
const Chat = lazy( () => import('./components/Chat'));
const Signup = lazy ( () => import('./components/Signup'));
const Nick = lazy ( () => import('./components/Nick'));

import { ChitChatProvider } from "./context/ChitChatContext";

const renderLoader = () => <p>Loading</p>;

const PrivateRoute = ({ component, ...options }) => {
    const { isAuthed } = useAuthed();
    const Comp = isAuthed() ? component : Login;
  
    return <Route {...options} component={Comp} />;
};

export default function(){
    return (
        <ChitChatProvider>
            <div className="polygon"></div>
            <div className="container">
                <Suspense fallback={renderLoader()}>
                    <Header />
                    <Side />
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={ Login } />
                            <Route exact path="/signup" component={ Signup } />
                            <PrivateRoute path="/chat" exact component={ Chat } />
                            <PrivateRoute path="/nick" exact component={ Nick } />
                        </Switch>
                    </Router>
                    <Footer />
                </Suspense>
            </div>
        </ChitChatProvider>
    )
}