import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    callBack: () => void
    color?: string
    children: string
    disabled?: boolean

}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {
        callBack,
        color,
        children,
        disabled,
        ...otherProps
    } = props


    const finalClassName = `${disabled ? s.buttonDisabled : s.button}`

    return (
        <div>
            <button className={finalClassName} onClick={callBack} disabled={disabled}>{children}</button>
        </div>
    )
}


