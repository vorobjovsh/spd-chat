import React, {useState} from 'react';

import './main.css';
import {Message} from './message/message';
import {INITIAL_MESSAGES} from './constants';
import {getRandomMessage} from './utils/getRandomMessage';


export const Main = () => {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [currentMessage, setCurrentMessage] = useState('');

    const onMessageReply = () => {
        setTimeout(() => (
            setMessages(prevState => ([
                ...prevState, getRandomMessage()
            ]))
        ), 1000);
    };
    const onTextAreaChange = ({target: {value}}) => {
        setCurrentMessage(value);
    };
    const onButtonClick = () => {
        if (currentMessage.trim()) {
            setMessages([...messages, {text: currentMessage, isCurrentUser: true}]);
            setCurrentMessage('');
            onMessageReply();
        }
    };

    return (
        <div className="main">
            <div className="main__messages">
                {messages.map(({text, isCurrentUser}, i) => (
                    <Message key={i} text={text} isCurrentUser={isCurrentUser}/>
                ))}
            </div>
            <div className="main__plate">
                <textarea className="main__textarea" onChange={onTextAreaChange} value={currentMessage}/>
            </div>
            <div className="main__plate">
                <button className="main__button" onClick={onButtonClick}>Send message</button>
            </div>
        </div>
    )
};
