import React, {ChangeEvent, FC, useState} from 'react';

export type FullInputType = {
    addMessage: (message: string) => void
    messages: MessageType[]

}

export type MessageType = {
    id: number
    message: string
}

export const FullInput: FC<FullInputType> =
    ({
         addMessage,
         messages
     }) => {

        let [title, setTitle] = useState('')

        const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        }

        const onClickButtonHandler = () => {
            addMessage(title)
        }

        let renderMessage = messages.map(m => {
            return (
                <li className='messages' key={m.id}>
                    {m.message}
                </li>
            )
        })

        return (
            <div className='full_input'>
                <input
                    value={title}
                    onChange={onChangeInputHandler}
                />
                <button onClick={onClickButtonHandler}>+</button>
                <ul>
                    {renderMessage}
                </ul>
            </div>
        );
    };

