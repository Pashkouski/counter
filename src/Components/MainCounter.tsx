import React, {useState} from 'react';
import {SuperButton} from "./SuperButton";

type MainCounterType = {
    counter: number
    min: string
    max: string
    onClickAdd: () => void
    onClickDeleteALl: () => void
    onClickReset: () => void

}

const MainCounter = (props: MainCounterType) => {

    const addDisableHandler = () => {
        if (+props.max === props.counter) {
            return true
        }
        if(+props.min >= +props.max) {
            return true
        }
    }

    const resetDisableHandler = () => {
        if (props.counter === +props.min) {
            return true
        } else if (localStorage.getItem('startValue') === null) {
            return true
        } else return false
    }


    return (
        <div>
            {props.min === '' && props.max === ''
                ? 'Введите min и max значения'
                : props.max === ''
                    ? 'Введите max'
                    : props.min === ''
                        ? 'Введите min'
                        : props.min >= props.max
                            ? 'Введите корретное значение'
                            : localStorage.getItem('maxValue') === null
                                ? 'Нажмите Set'
                                : localStorage.getItem('presentValue') === null
                                    ? props.counter
                                    : localStorage.getItem('presentValue')
            }


            <SuperButton
                callback={props.onClickAdd}
                disable={addDisableHandler()}
            >
                +
            </SuperButton>
            <SuperButton
                callback={props.onClickDeleteALl}
                disable={props.min === '' && props.max === ''}
            >
                clear
            </SuperButton>
            <SuperButton
                callback={props.onClickReset}
                disable={resetDisableHandler()}
            >
                reset
            </SuperButton>
        </div>
    );
};

export default MainCounter;