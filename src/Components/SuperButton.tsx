import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonType = {
    counter?: number
    children?: string
    callback ?: () => void
    disable?: boolean
}
/*: React.FC<SuperButtonType>*/
export const  SuperButton = (props: SuperButtonType) => {


    // const finalClassName = `${disabled ? s.buttonDisabled : s.button}`




    return (
        <div>
            <button
                onClick={props.callback}
                disabled={props.disable}
            >{props.children}

            </button>
        </div>
    )
}


