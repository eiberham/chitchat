import { useContext } from 'react';
import { ChitChatContext } from "../context/ChitChatContext";

const useChitChat = () => {
    const [state, setState] = useContext(ChitChatContext);

    function setLoggedIn(value){
        setState(state => ({ ...state, authenticated: value }));
    }

    function setUser(user){
        setState(state => ({...state, user}));
    }

    return {
        setLoggedIn,
        isLoggedIn: state.authenticated,
        setUser,
        getUser: () => state.user
    }
};

export default useChitChat;