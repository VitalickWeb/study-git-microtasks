import React, {useState} from 'react';
import {v4} from 'uuid';
import './App.css';
import {MessageType} from "./components/FullInput/FullInput";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";
import {Messages} from "./components/Messages/Messages";


export const App = () => {

    // let [count, setCount] = useState(1)
    // const addCount = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const resetCount = () => {
    //     setCount(0)
    // }

    let [messages, setMessage] = useState<MessageType[]>([
        {id: v4(), message: 'message 1'},
        {id: v4(), message: 'message 2'},
        {id: v4(), message: 'message 3'},
    ])

    let [title, setTitle] = useState<string>('')

    const addMessage = ( message: string ) => {
        let newMessage = {
            id: v4(),
            message: message
        }
        setMessage([newMessage, ...messages] )
    }

    const addTitle = (title: string) => {
        setTitle(title)
    }

    return (
        <div className='App'>
            {/*<div>{count}</div>*/}
            {/*<button onClick={addCount}>btn count</button>*/}
            {/*<button onClick={resetCount}>reset count</button>*/}
            {/*<FullInput*/}
            {/*    messages={messages}*/}
            {/*    addMessage={addMessage}*/}
            {/*/>*/}
            <Input
                title={title}
                addTitle={addTitle}
            />
            <Button
                title={title}
                addTitle={addTitle}
                addMessage={addMessage}
            />
            <Messages
                messages={messages}
            />

        </div>
    );
}

