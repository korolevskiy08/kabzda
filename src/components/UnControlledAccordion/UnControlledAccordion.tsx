import React, {useReducer} from "react";
import {debug} from "util";
import {useState} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}



let UnControlledAccordion= (props: AccordionPropsType) => {

    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    console.log('Render Accordion')
        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>*/}
                <AccordionTitle title={props.titleValue} onClick={()=>dispatch({type: 'TOGGLE-COLLAPSED'})}/>
                {/*<button onClick={()=>setCollapsed(!collapsed)}>Toggle</button>*/}

                { !state.collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

let AccordionTitle = ({title, onClick}:AccordionTitlePropsType) => {
    console.log('Accordion Title')

    return (
        <h3 onClick={() => onClick()}> --{title}-- </h3>
    )
}

let AccordionBody = () => {
    console.log('Accordion Body')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}
export default UnControlledAccordion;