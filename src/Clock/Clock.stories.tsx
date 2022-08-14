import React from 'react'
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const AnalogExample = () => {

    return <>
        <Clock mode={'Analog'}/>
    </>
}

export const DigitalExample = () => {

    return <>
        <Clock mode={'Digital'}/>
    </>
}