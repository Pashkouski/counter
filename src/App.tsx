import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {SuperButton} from "./Components/SuperButton";
import {SuperInput} from "./Components/SuperInput";


function App() {

    const [counterMath, setCounterMath] = useState({min: 0, max: 0})
    const [counter, setCounter] = useState(0)
    const [min, setMin] = useState<string>('')
    const [max, setMax] = useState<string>('')



    const incrCounter = () => {
        setCounter(counter + 1)
    }


    const setInputValue = () => {
        setCounterMath({...counterMath, min: +min, max: +max})
        setCounter(+counterMath.min)

    }

    const resetInputValue = () => {
        setMin('')
        setMax('')
        setCounter(0)
        setCounterMath({...counterMath, min: +min, max: +max})
    }




    return (
        <div className="App">
            <section>
                <div className={"setSection"}>
                    <SuperInput
                        setValue={setMin}
                        value={min}
                        placeholder="MIN"
                    />
                    <SuperInput
                        setValue={setMax}
                        value={max}
                        placeholder="MAX"
                    />
                    <SuperButton
                        counter={counter}
                        callback={setInputValue}
                        disable={+min === counterMath.min && counterMath.max === +max}
                    >
                        Set
                    </SuperButton>


                </div>

                <div>
                    <div className={'counter'}> {counterMath.min >= counterMath.max
                        ? '"Error" not correct data '
                        : counterMath.min < counterMath.max
                            ? counter
                            : 'enter value and press "set"'}
                    </div>

                    <div>
                        <SuperButton
                            callback={incrCounter}
                            disable={counter === +counterMath.max}
                        >
                            inc
                        </SuperButton>

                        <SuperButton
                            counter={counter}
                            disable={counter === 0}
                            callback={resetInputValue}
                        >
                            reset
                        </SuperButton>
                    </div>

                </div>


            </section>
        </div>
    );
}

export default App;
