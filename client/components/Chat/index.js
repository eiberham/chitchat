import React, { useState, useEffect, useMemo } from 'react';
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
    const { getUser } = useChitChat();
    const socket = useMemo(() => 
        io('http://localhost:5000/channel-english', {
            transports: ['websocket'], 
            upgrade: false,
            query: { ...getUser() }
        })
    , []);

    useEffect(
        () => {
            socket.on("received", data  =>  {
                setMessages((messages) => [ ...messages, { ...data }])
            });
            () => socket.removeAllListeners()
        }, [socket]
    );

    return (
        <main className="chat">
            <ul id="messages">
                { messages.length > 0 && messages.map( ({type, message}, key) => (
                    <React.Fragment key={key}>
                        {type === 'server' ? (
                                <li key={key}><strong>{`${message}`}</strong></li>
                            ) : ( 
                                <li key={key}><strong>{`${getUser().name}`}</strong> : {`${message}`}</li>
                            )
                        }
                    </React.Fragment>
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
        </main>
    )
};

export default Chat;