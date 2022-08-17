import React from "react";
import {ClockViewPropsType} from "./Clock";

export const setDigitsString = (num: number) => num < 10 ? '0' + num : num

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