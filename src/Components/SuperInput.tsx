import React, {ChangeEvent} from 'react';
import s from './SuperButton.module.css'

type SuperInputType = {
    value: string
    setValue: (value: string) => void
    placeholder?: string
    onFocus: (status: boolean) => void
}

export const SuperInput: React.FC<SuperInputType> = (props) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value)
  }


    return (
        <div>
            <input type="number"
                   value={props.value}
                   onChange={onChangeHandler}
                   placeholder={props.placeholder}
                   onFocus={()=>props.onFocus(false)}
            />
        </div>
    )
}


