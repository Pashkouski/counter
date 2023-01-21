import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonType = {
    children?: string
    callback: () => void
    disable?: boolean
}

export const  SuperButton = (props: SuperButtonType) => {

    return (
        <div>
            <button
                onClick={props.callback}
                disabled={props.disable}
                className={props.disable ? s.buttonDisabled : s.button}
            >
                {props.children}
            </button>
        </div>
    )
}


