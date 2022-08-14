import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Accordion } from './Accordion';


export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('clicked on or off')
const onClickcallback = action('some item was clicked')

const AccordionMemo = React.memo(Accordion)

export const OnnMode = () => <AccordionMemo titleValue={'Menu'} collapsed={false} onChange={callback} items={[]} onCLick={onClickcallback}/>
export const OffMode = () => <AccordionMemo titleValue={'Menu'} collapsed={true} onChange={callback} items={[{title: 'Marusia', value: 1},
{title: 'Dimych', value: 2}, {title: 'Zhenya', value: 3}, {title:'Pablo', value: 4}]} onCLick={onClickcallback}/> 

export const ModeChanged = () => {
    const [value, setValue] = useState(true)
    return <AccordionMemo titleValue={'Menu'} collapsed={value} onChange={()=>setValue(!value)} items={[{title: 'Marusia', value: 1},
    {title: 'Dimych', value: 2}, {title: 'Zhenya', value: 3}, {title:'Pablo', value: 4}]} onCLick={onClickcallback}/>
}