import React, {useState} from 'react';
import './App.css';
import {FullInput, MessageType} from "./components/FullInput/FullInput";



export const App = () => {

    // let [count, setCount] = useState(1)
    // const addCount = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const resetCount = () => {
    //     setCount(0)
    // }

    let [messages, setMessage] = useState<MessageType[]>([
        {id: 1, message: 'message 1'},
        {id: 2, message: 'message 2'},
        {id: 3, message: 'message 3'}
    ])



    const addMessage = (message: string) => {
        let newMessage = {
            id: 4,
            message: message
        }
        setMessage([newMessage, ...messages])
    }
    return (
        <div className='App'>
            {/*<div>{count}</div>*/}
            {/*<button onClick={addCount}>btn count</button>*/}
            {/*<button onClick={resetCount}>reset count</button>*/}
            <FullInput
                messages={messages}
                addMessage={addMessage}
            />
        </div>
    );
}

