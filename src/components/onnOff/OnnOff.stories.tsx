import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { OnnOff } from './OnnOff';


export default {
    title: 'OnnOff stories',
    component: OnnOff,
}

const OnnOffMemo = React.memo(OnnOff)

export const OnnMode = () => <OnnOffMemo on={true} setOnnOffCollapsed={()=>{}}/>
export const OffMode = () => <OnnOffMemo on={false} setOnnOffCollapsed={()=>{}}/>

export const ModeChanged = () => {
    const [value, setValue] = useState(true)
    return <OnnOffMemo on={value} setOnnOffCollapsed={()=>setValue(!value)}/>
}

