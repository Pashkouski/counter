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
            >
                {props.children}
            </button>
        </div>
    )
}


