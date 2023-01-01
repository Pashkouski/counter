import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import {SuperButton} from "./Components/SuperButton";


function App() {

    const [counter, setCounter] = useState<number>(0)
    const [min, setMin] = useState<string>('')
    const [max, setMax] = useState<string>('')


    const MinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(e.currentTarget.value)
        setCounter(+e.currentTarget.value)
    }

    const MaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value)
    }

    const ResetHandler = () => {
        setMax('')
        setMin('')
        setCounter(0)
    }

    const CounterPlusHandler = () => {
        if (min < max) {
            setCounter(counter + 1)
        }
    }

    const CounterMinusHandler = () => {
        setCounter(counter - 1)
    }


    return (
        <div className="App">
            <div>
                <input
                    className={s.input}
                    placeholder={'Min'}
                    onChange={MinHandler}
                    value={min}
                    type="number"
                />

                <div>
                    <div className={counter === +max ? ' ' + s.MaxCounter : s.display}>
                        {counter}
                    </div>
                    <div className={s.displayBlock}>

                        <SuperButton
                            disabled={counter === +min}
                            callBack={CounterMinusHandler}
                        >-
                        </SuperButton>

                        <SuperButton callBack={ResetHandler}
                                     disabled={counter === +min}
                        >reset
                        </SuperButton>

                        <SuperButton
                            disabled={counter === +max}
                            callBack={CounterPlusHandler}
                        >+
                        </SuperButton>

                    </div>

                </div>

                <input
                    type="number"
                    placeholder={'Max'}
                    onChange={MaxHandler}  //вводится е уточнить
                    value={max}
                />
            </div>
        </div>
    );
}

export default App;
