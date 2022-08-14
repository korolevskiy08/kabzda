import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { UnControlledOnnOff } from '../UnControlledOnnOff/UnControlledOnnOff'


export default {
    title: 'UnConrolledAccordion stories',
    component: UnControlledOnnOff,
}

export const OnnMode = () => <UnControlledOnnOff defaultOn={true} onChange={()=>{}}/> 
export const OffnMode = () => <UnControlledOnnOff defaultOn={false} onChange={()=>{}}/> 

export const DefaultInputValue = () => <input defaultValue={'yo'} /> 

