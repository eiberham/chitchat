import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    dataIdFromObject: o => o.id
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector("#app"));