import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import MainCounter from "./Components/MainCounter";
import SettingsCounter from "./Components/SettingsCounter";



function App() {
    const [min, setMin] = useState<string>('')
    const [max, setMax] = useState<string>('')
    const [counter, setCounter] = useState(+min)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if (startValue) {
            const newValue = JSON.parse(startValue)
            setMin(newValue)
            setCounter(newValue)
        }
        if (maxValue) {
            const newMaxValue = JSON.parse(maxValue)
            setMax(newMaxValue)
        }
    }, [])
    useEffect(() => {
        let presentValue = localStorage.getItem('presentValue')
        if (presentValue) {
            const newCounterValue = JSON.parse(presentValue)
            setCounter(+newCounterValue)
        }

    }, [counter])


    const onClickSet = () => {
        setDisable(true)
        localStorage.setItem('startValue', min)
        localStorage.setItem('maxValue', max)
        localStorage.setItem('presentValue', min)
        setCounter(+min)
    }

    const onClickDeleteALl = () => {
        localStorage.removeItem('startValue')
        localStorage.removeItem('maxValue')
        localStorage.removeItem('presentValue')
        setCounter(0)
        setMin('')
        setMax('')
    }
    const onClickAdd = () => {
        setCounter(counter + 1)
        localStorage.setItem('presentValue', String(counter + 1))

    }
    const onClickReset = () => {
        localStorage.setItem('presentValue', min)
        setCounter(+min)

    }


    return (
        <div className="App">
            <div className={'MainCounterWrapper'}>
                <MainCounter
                    counter={counter}
                    min={min}
                    max={max}
                    onClickAdd={onClickAdd}
                    onClickDeleteALl={onClickDeleteALl}
                    onClickReset={onClickReset}
                />

            </div>
            <div className={'SettingsCounterWrapper'}>
                <SettingsCounter
                    setMin={setMin}
                    setMax={setMax}
                    min={min}
                    max={max}
                    onClickSet={onClickSet}
                    disable={disable}
                    setDisable={setDisable}
                />
            </div>



        </div>
    );
}

export default App;
