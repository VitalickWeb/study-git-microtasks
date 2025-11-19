import React, {FC} from 'react';

export type ButtonType = {
    title: string
    addTitle: (title: string) => void
    addMessage: (message: string) => void
}

export const Button: FC<ButtonType> =
    ({
         title,
         addTitle,

         addMessage,
     }) => {



        const onClickButtonHandler = () => {
            if (title.trim() !== '') {
                addMessage(title)
                addTitle('')
            }
        }

        return (
            <>

                <button onClick={onClickButtonHandler}>+</button>

            </>
        );
    };

