import React, {FC} from 'react';

export type MessagesType = {
    messages: MessageType[]
}

type MessageType = {
    id: string
    message: string
}

export const Messages: FC<MessagesType> = ({messages}) => {

    let renderMessage = messages.map(m => {
        return (
            <li className='messages' key={m.id}>
                {m.message}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {renderMessage}
            </ul>
        </div>
    );
};

