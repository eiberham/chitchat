import { useContext } from 'react';
import { ChitChatContext } from "../context/ChitChatContext";

const useChitChat = () => {
    const [state, setState] = useContext(ChitChatContext);

    function setLoggedIn(value){
        setState(state => ({ ...state, authenticated: value }));
    }

    return {
        setLoggedIn,
        isLoggedIn: state.authenticated,
    }
};

export default useChitChat;