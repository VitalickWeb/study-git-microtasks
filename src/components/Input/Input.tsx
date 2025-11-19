import React, {ChangeEvent, FC} from 'react';

export type InputType = {
    title: string
    addTitle: (title: string) => void
}

export const Input: FC<InputType> = ({title, addTitle}) => {

    // let [message, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addTitle(e.currentTarget.value)
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

