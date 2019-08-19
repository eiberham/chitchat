import React, { useState } from 'react';

const ChitChatContext = React.createContext([{}, () => {}]);

const ChitChatProvider = (props) => {
    const [state, setState] = useState({
        authenticated: false
    });

    return (
        <ChitChatContext.Provider value={[state, setState]}>
            {props.children}
        </ChitChatContext.Provider>
    )
};

export { ChitChatContext, ChitChatProvider };