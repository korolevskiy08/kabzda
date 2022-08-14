import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
    items: ItemType[]
    onCLick: (value: any) => void
}

export let Accordion= ({titleValue, collapsed, onChange, items, onCLick}:AccordionPropsType) => {
    console.log('Render Accordion')
        return (
            <div>
                <AccordionTitle
                                title={titleValue}
                                onChange={onChange}
                />

                { !collapsed && <AccordionBody items={items} onCLick={onCLick}/>}
            </div>
        )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onCLick: (value: any) => void
}

let AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('Accordion Body')
    return (
        <div>
            <ul>
                {props.items.map((el, index) => <li onClick={() => {props.onCLick(el.value)}} key={index}>{el.title}</li>)}
            </ul>
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

let AccordionTitle = ({title, onChange}: AccordionTitlePropsType) => {
    console.log('Accordion Title')

    return (
        <h3 onClick={onChange}> --{title}-- </h3>
    )
}
