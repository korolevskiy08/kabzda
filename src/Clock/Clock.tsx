import React, {useEffect, useState} from "react"
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

type PropsType = {
    mode?: 'Analog' | 'Digital'
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'Analog':
            view = <AnalogClock date={date}/>
            break
        case 'Digital':
            view = <DigitalClock date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

