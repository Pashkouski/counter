import React, {useState} from 'react';
import {SuperInput} from "./SuperInput";
import {SuperButton} from "./SuperButton";
import s from './SettingsCounter.module.css'

type SettingsCounterType = {
    setMin: (min: string) => void
    setMax: (max: string) => void
    max: string
    min: string
    onClickSet: () => void
    disable: boolean
    setDisable: (disable: boolean) => void
}


const SettingsCounter = (props: SettingsCounterType) => {

    const onFocusHandler = (status: boolean) => {
        props.setDisable(status)
    }

    return (
        <div>
            <SuperInput value={props.min} setValue={props.setMin} onFocus={onFocusHandler} placeholder={'Min'}/>
            <SuperInput value={props.max} setValue={props.setMax} onFocus={onFocusHandler} placeholder={'Max'}/>
            <SuperButton
                callback={props.onClickSet}
                disable={props.disable}
            >
                set
            </SuperButton>
        </div>
    );
};

export default SettingsCounter;