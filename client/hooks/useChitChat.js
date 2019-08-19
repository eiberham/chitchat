import { useContext } from 'react';
import { ChitChatContext } from "../context/ChitChatContext";

const useChitChat = () => {
    const [state, setState] = useContext(ChitChatContext);
    // TODO: see which functions could be added like setIsLoggedIn, setIsLoggedOut and so forth ...
};

export default useChitChat;