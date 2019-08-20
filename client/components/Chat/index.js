import React, { useState, useEffect } from 'react';
import './chat.scss';
import { Formik } from 'formik';
import io from 'socket.io-client';

import useChitChat from '../../hooks/useChitChat';
import * as Yup from "yup";
import ChatForm from "../Forms/ChatForm";

const ChatSchema = Yup.object().shape({
    message: Yup.string()
        .min(1, 'Too Short!')
        .max(255, 'Too Long!')
        .required('Required'),
});

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const { setLoggedIn, isLoggedIn } = useChitChat();
    const socket = io('http://localhost:5000', {transports: ['websocket'], upgrade: false});
    console.log("logueado?: ", isLoggedIn);

    useEffect(
        () => {
            socket.on("received", data  =>  {
                setMessages((messages) => [ ...messages, {message: data.message}])
            });

        }, []
    );

    return (
        <div className="chat-wrapper">
            <ul id="messages">
                { messages.length > 0 && messages.map( ({message}) => (
                    <li>{message}</li>
                ))}
            </ul>
            <Formik
                render={props => <ChatForm {...props} />}
                initialValues={{ message: ''}}
                validationSchema={ChatSchema}
                onSubmit={ async ({message}, actions) => {
                    socket.emit('chat message', message);
                    actions.resetForm();
                }}
            />
        </div>
    )
};

export default Chat;