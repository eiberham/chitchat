import React, {useState, useEffect, useContext} from 'react';
import {ChitChatContext} from "../context/ChitChatContext";
import history from '../history';

export default function useLogin() {
    const [isLoggedin, setIsLoggedin] = useState(true);
    const [state, setState] = useContext(ChitChatContext);

    useEffect(
        () => {
            console.log("useEffect ran in useLogin hook");
            if (!state.authenticated) {
                history.push("/");
            } else {
                console.log("useEffect ran, about to set state to true");
                setIsLoggedin(true)
            }
        },
        [state.authenticated]
    );

    return { isLoggedin };
};