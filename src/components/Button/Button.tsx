import React, {FC} from 'react';

export type ButtonType = {
    title: string
    callBack: () => void
}

export const Button: FC<ButtonType> =
    ({
        title,
         callBack,
        ...props
     }) => {

        const onClickButtonHandler = () => {
            callBack()
        }

        return (
            <>
                <button {...props} onClick={onClickButtonHandler}>{title}</button>
            </>
        );
    };

