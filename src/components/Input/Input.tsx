import React, {ChangeEvent, FC} from 'react';

export type InputType = {
    title: string
    setTitle: (title: string) => void
}

export const Input: FC<InputType> = ({title, setTitle}) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <>
            <input
                value={title}
                onChange={onChangeInputHandler}
            />
        </>
    );
};

