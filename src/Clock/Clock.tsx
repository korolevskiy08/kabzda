import React, {useEffect, useState} from "react"

type PropsType = {
    mode?: 'Analog' | 'Digital'
}

const setDigitsString = (num: number) => num < 10 ? '0' + num : num

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

type ClockViewPropsType = {
    date: Date
}

export const DigitalClock = ({date}: ClockViewPropsType) => {
    return (
        <>
            <span>{setDigitsString(date.getHours())}</span>
            :
            <span>{setDigitsString(date.getMinutes())}</span>
            :
            <span>{setDigitsString(date.getSeconds())}</span>
        </>
    )
}

export const AnalogClock = ({date}: ClockViewPropsType) => {
    return (
        <span>ANALOG</span>
    )
}