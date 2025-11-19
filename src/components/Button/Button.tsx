import React, {FC} from 'react';
import {Input} from "../Input/Input";

export type ButtonType = {
    title: string
    addTitle: (title: string) => void
    messages: MessageType[]
    addMessage: (message: string) => void
}

export type MessageType = {
    id: string
    message: string
}

export const Button: FC<ButtonType> =
    ({
         title,
         addTitle,
         messages,
         addMessage,
     }) => {

        let renderMessage = messages.map(m => {
            return (
                <li className='messages' key={m.id}>
                    {m.message}
                </li>
            )
        })

        const onClickButtonHandler = () => {
            if (title.trim() !== '') {
                addMessage(title)
                addTitle('')
            }
        }

        return (
            <>
                <Input
                    title={title}
                    addTitle={addTitle}
                />
                <button onClick={onClickButtonHandler}>+</button>
                <ul>
                    {renderMessage}
                </ul>
            </>
        );
    };

